import React, { useState } from 'react';
import axios from 'axios';
import List from "./components/List"

const categoriesUrl = "http://localhost:82/api/getcategories"
const categorieUrl = "http://localhost:82/api/getcategorie/"
const buildCategoriesUrl = "http://localhost:82/api/pushcategories"


function App() {
    const [isLoading, setLoading] = useState(false);
    const [way, setWay] = useState([]);
    const [breadcrumb, setBreadcrumb] = useState('');
    const [buttonBack, setButtonBack] = useState(false);
    const [buttonSelect, setButtonSelect] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoriesEnabled, setCategoriesEnabled] = useState(false);
    const [loadCategories, setLoadCategories] = useState(false);
    const [previous, setPrevious] = useState([]);

    function addBreadcrumb(value){
        var caminho = way;
        caminho.push(value);
        setWay(caminho);
        buildBreadcrumb();
    }

    function removeBreadcrumb(){
        var caminho = way;
        caminho.pop();
        setBreadcrumb(caminho);
        buildBreadcrumb();
    }

    function buildBreadcrumb(){
        var bb="";
        way.map((value, index)=>{
            if (index>0)
                bb += " > "+value
            else
                bb += value
        })
        setBreadcrumb(bb);
    }

    function backHandleClick(){
        setButtonSelect(false);
        var prev = previous;
        var backCat = prev.pop();
        setPrevious(prev);
        if (previous.length==1){
            fetchData();
            setButtonBack(false);
            setWay([]);
            setBreadcrumb("");
        }else{
            getCategorie(backCat);
            removeBreadcrumb();
        }
    }

    function categorieHandleClick(e){
        const code = e.currentTarget.getAttribute('data-code');
        const next = e.currentTarget.getAttribute('data-next');
        const prev = e.currentTarget.getAttribute('data-previous'); 
        const name = e.currentTarget.getAttribute('data-name');
        if (next!="0"){
            var prevA = previous;
            prevA.push(prev);
            setPrevious(prevA);
            getCategorie(code);
            addBreadcrumb(name);
            setButtonSelect(false);
            setButtonBack(true);
        }else{
            setButtonSelect(true);
        }
    } 

    const getCategorie = async(code) => {
        setLoadCategories(true);
        try{
            const {data: response} = await axios({method: "get", url: categorieUrl+code});
            setCategories(response)
        }catch (error){
            console.error(error.message);
        }
    }

    const importHandleClick = async () => {
        setLoading(true);
        setLoadCategories(false);
        try{
            const {data: response} = await axios({method: "get", url: buildCategoriesUrl});
            fetchData();
            setLoadCategories(true);
            setLoading(false);

        }catch (error){
            console.error(error.message);
        }
    }

    const fetchData = async () => {
        try{
            const {data: response} = await axios({method: "get", url: categoriesUrl});
            setCategories(response);
            if (response.length>0)
                setLoadCategories(true);
        } catch (error) {
            console.error(error.message);
        } 
    }

    React.useEffect(() => {
        fetchData();
        setButtonSelect(false);   
        setButtonBack(false);
        setWay([]);
        setBreadcrumb("");
        setPrevious([]);
    }, []);



    return (
        <div >
            <div className="d-flex justify-content-center" style={{ marginTop: '2rem' , marginBottom: '2rem' }}>
                <button type="button" 
                onClick={!isLoading ? importHandleClick : null} 
                className="btn btn-primary btn-lg d-flex align-items-center" 
                disabled={isLoading}
                >
                    {isLoading && <span className="spinner-border"></span>}
                    <span  style={{ paddingLeft: '0.5rem'}}>{isLoading ? ' Importando Categorias...' : 'Importar Categorias'}</span>
                </button>
            </div>
            { loadCategories ?
                <>
                    <div className="d-flex justify-content-center" style={{ marginTop: '2rem' , marginBottom: '2rem' }}>
                        {breadcrumb}
                    </div>
                    <div className="">
                        <div className="d-flex justify-content-center">
                            <div  className="col-md-6" style={{overflowY: "auto", height: '310px'}}>
                                <List 
                                listItems={categories}
                                click={categorieHandleClick}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center" >
                        {
                            buttonBack ?
                            <div onClick={backHandleClick} style={{ marginTop: '2rem' , marginBottom: '2rem', marginRight: '2rem' }}>
                                <button type="button" className="btn btn-primary btn-lg">
                                    <span>Voltar</span>
                                </button>
                            </div>
                            :
                            <></>
                        }
                        {
                            buttonSelect ?
                            <div style={{ marginTop: '2rem' , marginBottom: '2rem' }}>
                                <button type="button" className="btn btn-primary btn-lg">
                                    <span>Continuar</span>
                                </button>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </>
                :
                <></>
            }
        </div>
    );
}

export default App;