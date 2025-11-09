// import React from 'react'
// import './Css/LoginSignUp.css'

// const LoginSignUp = () => {
//   return (
//     <div className='loginsignup'>
//       <div className='loginsignup-container'>
//         <h1>Sign Up</h1>
//         <div className='loginsignup-fields'>
//           <input type="text" placeholder='Your Name'/>
//           <input type="email" placeholder='Email Address'/>
//           <input type="password" placeholder='Password'/>
//         </div>
//         <button>Continue</button>
//         <p className='loginsignup-login'>Already have an account</p>
//         <div className='loginsignup-agree'>
//           <input type="checkbox"/>
//           <p>By continuing, i agree to the term of use 7 privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default LoginSignUp;
import React, { useState } from 'react';
import './Css/LoginSignUp.css';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login & signup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  let navigate = useNavigate()
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {

      const found = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (found) {
        setLoggedInUser(found);
        setError('');
        navigate('/shop');
      } else {
        setError('Invalid email or password');
      }
    } else {
      const userExists = users.find((user) => user.email === formData.email);
      if (userExists) {
        setError('User already exists');
      } else {
        const newUser = {
          name: formData.name,
          email: formData.email,
          password: formData.password
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
       
        setError('');
        setIsLogin(true); 
        setFormData({ name: '', email: '', password: '' });
      }
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setFormData({ name: '', email: '', password: '' });
    setIsLogin(true);
  };



  if (loggedInUser) {
    return (
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Welcome, {loggedInUser.name || loggedInUser.email}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="loginsignup">
      <form className="loginsignup-container" onSubmit={handleSubmit}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

        <div className="loginsignup-fields">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignUp;
