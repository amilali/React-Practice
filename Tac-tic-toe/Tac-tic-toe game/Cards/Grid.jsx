import Cards from "./Cards";
import { useState } from "react";
import "../Cards/Grid.css"

function Grid({numberOfGrid}){
    const [Board , setBoard] = useState(Array(numberOfGrid).fill(""));

    return(
        <div className="grid">
            {Board.map((e,i)=><Cards key={i} />)}
        </div>
        
    );
}

export default Grid;