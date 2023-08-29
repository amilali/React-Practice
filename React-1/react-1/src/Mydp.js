export function Hedd(props){
    return(
        <h2>{props.name}</h2>
    );
 }
 
 function Mydp(props){
    return(
        <div>
        <img src={props.link} alt="dp" height="100px" opacity="1"/>
        <Hedd />        
        </div>
    );
}

export default Mydp;