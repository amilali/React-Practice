/* eslint-disable react/prop-types */
const List = ({items}) =>{
    return(
        <ul>
           {
            // eslint-disable-next-line react/prop-types
            items.map((e)=>(
                <li key = {e}>{e}</li>
            ))
           }
        </ul>
    );
}

export default List;