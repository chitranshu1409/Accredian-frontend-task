import React from 'react'
import './Cards.css'
import'../App.css';
import Modal from './Modal';
import avatar from '../pics/avatar.png';
import money from '../pics/money.png';
import wallet from '../pics/wallet.png';
const Cards = () => {
  return (
    <>
    <div className='cards-section'>
        <div className='title-how-to-reffer flex justify-center items-center'>How Do I &nbsp;<b> Refer?</b></div>
        <div className=' how-to-reffer flex'>
        <div class="e-card playing ">
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="infotop">
            Submit referrals easily via out website's referral section
            <img src={avatar}></img>

            </div>
        </div>
        <div class="e-card playing">
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="infotop">
            Earn rewards once your referral joins an accredian program
            <img src={money}></img>
                  
                    
                   
                
            </div>
        </div>
        <div class="e-card playing">
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="infotop">
            Both parties receive a bonus 30 days after program enrollment
            <img  src={wallet}></img>
            
            
               
            </div>
        </div>
        </div>
        <div className='mt-10 flex justify-center'>
           <Modal/>
        </div>
    </div>
    </>
  )
}

export default Cards