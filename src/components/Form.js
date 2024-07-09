import React,{useState} from 'react'
import './Form.css'
import course from '../pics/course.png' 
import axios from 'axios';
const Form = ({setIsOpen}) => {
    const [firstName, setfirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [refereeEmail, setfRefereeEmail] = useState()
   

    const handelSubmit = (e) => {
        e.preventDefault()
        setIsOpen(false)
        axios.post('https://accredian-backend-task-15.onrender.com/', { firstName, lastName, email, refereeEmail })
       .then(response => {
            console.log(response)
            
        })
       .catch(error => {
            console.error(error)
        })
    }
  return (
    <>
        
        <form class="form" method='POST' onSubmit={(e)=>handelSubmit(e) }  >
            <div className='flex1'>
            <div>
                <p class="title">Refer </p>
                <p class="message">Refer now and get exciting offers. </p>
            </div>
            <div className='modal-img'>
                <img src={course}></img>
            </div>
            </div>
        <div class="flex1">
        <label>
            <input required={true} onChange={(e)=>setfirstName(e.target.value)} placeholder="" name='firstname' type="text" class="form-input"/>
            <span className='spanclass'>Firstname</span>
        </label>

        <label>
            <input required={true} onChange={(e)=>setLastName(e.target.value)}placeholder="" name="lastname" type="text" class="form-input"/>
            <span className='spanclass'>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required={true}  onChange={(e)=>setEmail(e.target.value)} placeholder="" name='email' type="email" class="form-input"/>
        <span className='spanclass'> Email</span>
    </label> 
        
    <label>
        <input required={true} onChange={(e)=>setfRefereeEmail(e.target.value)} placeholder="" name='refereeEmail' type="email" class="form-input"/>
        <span className='spanclass'>Referee Email</span>
    </label>
    <div className='flex justify-around'>
    <button onClick={() => setIsOpen(false)} className='cancel-btn' >Cancel</button>
    <button type='submit' class="submit">Send Referal</button>
    </div>
    
</form>
</>  
    
    
  )
  
}

export default Form