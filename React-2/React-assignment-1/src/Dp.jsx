// eslint-disable-next-line react/prop-types

let Dp =(props)=>{
    const {src,text} = props;
    return(
        <>
        <img src={src}/>
        <h1>{text}</h1>
        </>
    );
}

export default Dp;