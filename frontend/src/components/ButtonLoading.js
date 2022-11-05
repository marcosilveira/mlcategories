import React from 'react';
import { useState } from "react";

// import { Container } from './styles';

function ButtonLoading(props) {
    const [isLoading, setLoading] = useState(false);

    const handleClick= () => {
        setLoading(true);
    }

    function changeButtonState(value){
        setLoading(value);
    }

    return (
        <div>
            <button type="button" 
            onClick={!isLoading ? handleClick : null} 
            className="btn btn-primary btn-lg d-flex align-items-center" 
            disabled={isLoading}
            >
                {isLoading && <span className="spinner-border"></span>}
                <span  style={{ paddingLeft: '0.5rem'}}>{isLoading ? ' Importando Categorias...' : 'Importar Categorias'}</span>
            </button>
        </div>

    );
}

export default ButtonLoading;