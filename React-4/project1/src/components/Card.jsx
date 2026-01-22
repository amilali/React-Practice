import React, {useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Card = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.title || !props.url) {
      navigate('/');
    }
  }, [props.title, props.url, navigate])

  
  return (
    <div onClick={(e)=>{
      navigate('/card', {
        state: {title: e.target.alt,url:e.target.currentSrc}
      })
    }} style={{
      flex: '1 1 20%',
      margin: '10px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      border: '1px solid white'
    }}>
      
      <img
        style={{
          width: '150px',
          height: '200px',        
          objectFit: 'contain',   
        }}
        src={props.url}
        alt={props.title}
      />

      <h2 style={{
        width: '100%',
        textAlign: 'center',
        fontSize: '12px',
        marginTop: '8px',
        lineHeight: '1.3',
      }}>
        {props.title}
      </h2>
    </div>
  )
}


export default Card