import React, { useState, useEffect}from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function Read() {
  const [data, setData] = useState([])
  const {id} = useParams();

  useEffect(()=> {
    axios.get('http://localhost:3000/users/'+ id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className='d-flex justify-content-center'>
      <div className='m-75 border bg-info shadow rounded'>
        <h3>Detail of User</h3>
        <div className='container'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='container'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='container'>
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={'/update/${id}'} className='btn btn-success'>Edit</Link>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>


      </div>

    </div>
  )
}

export default Read