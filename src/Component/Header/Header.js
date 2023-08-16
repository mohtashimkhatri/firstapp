import React from 'react'
import './Header.css'
import Navbare from '../Navebare/Navbare'
import {BsStopCircle} from 'react-icons/bs';

function Header() {
  return (
    <div className='Header__main'>
<Navbare />
<div className='text'>
<div>
<h1 className='text-center'>
    We Have Startups launch thier <br /> products
    
</h1>
<p className='text-center my-3'>
Etiam sed.Interdum consequat proin vestibulum class at.
</p>
<h1 className='text-center'>
<BsStopCircle className='icon__circle' />
</h1>
</div>
</div>
    </div>
  )
}

export default Header
