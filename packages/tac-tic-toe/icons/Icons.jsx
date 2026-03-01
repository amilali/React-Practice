import {FaPen, FaTimes, FaRegCircle  } from "react-icons/fa";

function Icons({names}){
if (names == 'circle')
{
    return <FaRegCircle size="70" />
}
else if(names == 'cross')
{
    return <FaTimes size="70" />
}
else{
    return <FaPen />
}

}

export default Icons;