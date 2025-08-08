import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, password }),
});


      const data = await res.json();
      if (data.success) {
        alert('Registration successful');
        navigate('/a/login'); // redirect to login page
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <>
    <div className="register-page">
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="register-title-container">
      <h2 className="register-title">Register</h2>
      <input  className="register-input"  type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input  className="register-input2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input  className="register-input3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button className="register-button" type="submit">Register</button>
      </div>
    </form>
    </div>
    
    </>
  );
}
