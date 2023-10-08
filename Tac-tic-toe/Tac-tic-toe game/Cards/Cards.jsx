import Icons from "../icons/icons";
import "../Cards/card.css";
function Cards({player}){
    let x = <Icons />;
    if(player == 'X')
    {
        x = <Icons names = "cross" />
    }
    if(player == 'O')
    {
        x = <Icons names = "circle" />
    }


    return(
        <div className="card"> {x}</div>
           
    );
}
export default Cards;