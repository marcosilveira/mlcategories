import ListItems from './ListItems';

function List(props) {

    return (
        <div className="panel panel-default">
            <div className="list-group">
                {
                    props.listItems.map((item, index)=>{
                        return (
                            <ListItems
                                name={item.description}
                                code={item.code}
                                previous={item.previous}
                                next={item.next}
                                key={item.code}
                                click={props.click}
                            />
                        )   
                    })
                }
            </div>
        </div>
    )
}

export default List;