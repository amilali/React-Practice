import {FaPen, FaTimes, FaRegCircle  } from "react-icons/fa";

function Icons({names}){
if (names == 'circle')
{
    return <FaRegCircle />
}
else if(names == 'cross')
{
    return <FaTimes />
}
else{
    return <FaPen />
}

}

export default Icons;