import Cards from "./Cards";
import { useState } from "react";
import "../Cards/Grid.css"
import isWinner from "../helper/Winner"


function Grid({numberOfGrid}){
    const [Board , setBoard] = useState(Array(numberOfGrid).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner]= useState(null);
    function play(index)
    {
        if(turn == true){
            Board[index] = "O";
        }
        else{
            Board[index] = "X"; 
        }
        const win = isWinner(Board, turn?"O":"X");

        if(win){setWinner(win);}

        setBoard([...Board]);
        setTurn(!turn);
    }

    return(
        <div className="grid-container">
            {
              
                winner && ( <><div className="winner-con">
                <h1 className="winnerh1">Winner is: {winner}</h1></div>
                <button className="reset">Reset</button>
                </> 
                )
               
            }
            {
                (!winner) && (<> <h1 className="turnHeader"> Current Turn: {(turn) ? "O": "X"}</h1> 
                 <div className="grid">
            {Board.map((e,i)=><Cards gameEnd={(winner)? true : false} key={i} onPlay = {play}  player={e} index={i} />)}
        </div> </>)
            }
           
           
        
        </div>

    );
}

export default Grid;