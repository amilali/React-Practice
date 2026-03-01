import Icons from "../icons/icons";
import "../Cards/card.css";
function Cards({player, onPlay, index, gameEnd}){
    let x = <Icons />;
    if(player == 'X')
    {
        x = <Icons names = "cross" />
    }
    else if(player == 'O')
    {
        x = <Icons names = "circle" />
    }


    return(
        <div className="card" onClick={()=> !gameEnd && player == "" && onPlay(index)}> {x}</div>     
    );
}
export default Cards;