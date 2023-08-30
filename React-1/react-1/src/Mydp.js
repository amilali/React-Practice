export function Hedd(props){
    return(
        <h2>{props.name}</h2>
    );
 }
 
function Mydp({ link, name }){   
    return(
        <>
        <img src={link} alt="dp" height="100px" opacity="1"/>
        <h1>{ name }</h1>
        <Hedd />        
        </>
    );
}

export default Mydp;