import React, { useState } from 'react'


const Taskform = () => {
    const [formData, setFormData]= useState({
        fullName: '',
        email: '',
        department: '',
        time: '',
        note: '',
});
 const handleChange=(e)=> {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
 };

 const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(formData);
 }

  return (
<div className='outer'>
    <div className='inner'>
    <div className='contactus'>Contact Us</div>
    <div className='appoint'>Make an Appointment</div>
    </div>   
    <form onSubmit= {handleSubmit} >
        <input type='text' className='fullName' id='fullName' value={formData.fullName} onChange = {handleChange} placeholder='Enter Full Name'></input>
        <input type='email' className='email' id= 'email' value={formData.email} onChange = {handleChange} placeholder='Enter Email'></input>
        <label htmlFor='department' > Department</label>
        <select id='department' name='department'>
        <option value= ""> Select department</option>
        <option value="HR" > </option>
        <option value="Sales" > </option>
        <option value="IT" > </option>
        </select>
        <label htmlFor='time' disabled >Time</label>
        <select id='time' name='time'>
        <option value= ""> Select time</option>
        <option value="4 available" > </option>
        <option value="5 available" > </option>
        <option value="6 available" > </option>
        </select>
        <input type='text-Area' className='note' value={formData.note} onChange={handleChange} placeholder='Message'></input>
        <button type='submit'> Book Appointment</button>
    </form> 
</div>
  )
}

export default Taskform