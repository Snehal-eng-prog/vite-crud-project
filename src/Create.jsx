import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''

  })

  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3000/users', values)
    .then(res => {
      console.log(res);
      navigate('/')

    } )
    .catch(err => console.log(err));
  }
  return (
    <div className='d-flex flex-column justify-content-center align-item-center bg-white'>
      <div className='m-75 border bg-info shadow rounded'>
      <h1>Add a User</h1>
      <form onSubmit={handleSubmit}>
      <div className="container">
          <label htmlFor="id">ID:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter ID'
          onChange={e => setValues({...values, id: e.target.value})}/>
        </div>
        <div className="container">
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' className='form-control' placeholder='Enter Name'
          onChange={e => setValues({...values, name: e.target.value})}/>
        </div>
        <div className='container'>
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' className='form-control' placeholder='Enter Email'
          onChange={e => setValues({...values, email: e.target.value})}/>
        </div>
        <div className='container'>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name='phone' className='form-control' placeholder='Enter Phone'
          onChange={e => setValues({...values, phone: e.target.value})}/>
        </div>
        <button className='btn btn-secondary'>Submit</button>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
      </div>
    
    </div>
  )
}

export default Create