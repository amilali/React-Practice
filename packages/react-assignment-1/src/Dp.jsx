// eslint-disable-next-line react/prop-types

let Dp =(props)=>{
    const {src,text} = props;
    return(
        <>
        <img src={src} title= "Amil's Dp" style={{
            borderRadius : '100px',
            width: '100px',
            height: '100px',
            objectFit: 'cover'
        }}/>
        <h1>{text}</h1>
        </>
    ); 
}

export default Dp;