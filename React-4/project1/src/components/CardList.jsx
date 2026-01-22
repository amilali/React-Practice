import React, {useEffect, useState} from "react";
import Card from "./Card";

const CardList = () => {
    const [response, setResponse] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        async function fetchApi() {
            try {
                setLoader(true);
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                console.log(data);
                setResponse(data);
            } catch (error) {
                console.log(error);
            }
            finally{
                setLoader(false);
            }
        }
        fetchApi();
    }, []);

    if(loader){
        return <center style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
        }}>loading....</center>
    }

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
            response.map(e=>{
                return <Card key={e.id} title={e.title} url={e.image}/>
            })
        }
        </div>
    )
}

export default CardList;