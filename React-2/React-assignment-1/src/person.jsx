function Person( {name, age} ){
    return(
        <>        
        <p>Person Name is: {name} & Person Age is {age} </p>
        </>

    );
}

 export function Amil({children}){
    return(<>{children}</>);
}


export default Person;