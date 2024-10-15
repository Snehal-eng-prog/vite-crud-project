import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios.delete('http://localhost:3000/users/' + id)
        .then(res => {
          setData(data.filter(user => user.id !== id));
        })
        .catch(err => console.log(err));
    }
  };

  const handleAddUser = () => {
    const newUser = {
      name: 'New User',
      email: 'newuser@example.com',
      phone: '123-456-7890',
      id: getNextId() 
    };

    axios.post('http://localhost:3000/users', newUser)
      .then(res => {
        setData([...data, res.data]);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex flex-column justify-content-center align-item-center'>
      <h1 style={{color: "White"}}>List of Users</h1>
      <div className='m-75 rounded bg-secondary border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    {/* Fixed Link syntax with correct template literals */}
                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                    <button onClick={() => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
