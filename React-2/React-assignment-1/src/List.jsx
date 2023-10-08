
const List = ({items}) =>{
    return(
        <ul>
           {
            items.map((e)=>(
                <li key = {e}>{e}</li>
            ))
           }
        </ul>
    );
}

export default List;