import React from 'react'
import './Navebar.css'

export default function Navbare() {
  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand text-white Navebar__heading" href="#">DORSIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navebare__content__parent">
        <li class="nav-item  hover__li">
          <a class="nav-link  text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item  hover__li">
          <a class="nav-link text-white" href="#">Services</a>
        </li>
        <li class="nav-item  hover__li">
          <a class="nav-link text-white" href="#">Features</a>
        </li>
        <li class="nav-item  hover__li"> 
          <a class="nav-link text-white" href="#">Pricing</a>
        </li>
        <li class="nav-item hover__li">
          <a class="nav-link text-white" href="#">Team</a>
        </li>
        <li class="nav-item hover__li">
          <a class="nav-link text-white" href="#">Blog</a>
        </li>
        <li class="nav-item hover__li ">
          <a class="nav-link  text-white " aria-disabled="true">Contact</a>
        </li>
      </ul>
      <div className='navebare__button'>
        <button className='px-4 py-2 btn btn-danger fw-bold '>
            Try it free
        </button>
      </div>
    </div>
  </div>
</nav>
  )
}
