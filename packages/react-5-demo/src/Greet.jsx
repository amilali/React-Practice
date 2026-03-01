import { PureComponent, Component, memo } from "react";

// class Greet extends PureComponent{
//     render(){
//         console.log("🔁 Child rendered");
//         return <h1>{this.props.Name}</h1>
//     }
// }

// export default Greet;

function Greet({Name}){
    return(
        <>
        {console.log("Child rendered!!")}
        <h1>{Name}</h1>
        </>
    )
}

export default memo(Greet)


// PureComponent is used for react optimization where using PureComponent insted of Component in class compoennt will not render child component 
// if parents compoennt renders (as its a default behaviour) but using PureComponent will not rerender unnless its props or state didn't change

// same in functional compoennt we can use this by using "memo" .