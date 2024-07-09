import React,{useState} from 'react'
import './Landingpage.css'
import reffer from '../pics/Refer2.png'
import Cards from './Cards'
import '../App.css'
import Modal from './Modal'
import {Link,useNavigate} from 'react-router-dom';

const Landingpage = () => {
  
    
  return (
    <>
    <div className="hero bg-gradient-to-l from-indigo-500 ... shadow-2xl ... relative flex isolate px-6  lg:px-8">
        <div className="mx-auto  max-w-lg py-6 sm:py-18 lg:py-46">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Let's Learn<br/> & <b>Earn</b>
            </h1>
            <p className="mt-6 text-3xl leading-8 text-gray-600">
            <p>Get a chance to win</p>
            <p>upto <b>RS. 15,000</b></p>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            
                
              <Modal />
            </div>
          </div>
        </div>
        <div className='img-div max-w-lg'>
            <img src={reffer}/>
        </div>
        
      </div>
      <Cards/>
      </>

     
    
  )
}

export default Landingpage