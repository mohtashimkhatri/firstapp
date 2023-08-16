import React from 'react';
import './Card.css'

function Card(props) {
  return (
    <div className='card__main '>
       <img  width={300} className='rounded' src={ props.src } alt='' />
       <h4 className='text-center family'>{ props.title }</h4>
       <p className='text-center color'>{props.content}</p>

    </div>
  )
}

export default Card
