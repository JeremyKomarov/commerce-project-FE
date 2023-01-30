import React, { useState } from 'react'
import "./Signup.css"
import { registerCustomer } from "../../services/api"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Signup() {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required").matches(USER_REGEX, "Invalid username"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").matches(PWD_REGEX, "Invalid password"),
    confirmPassword: yup.string().required("Confirm password is required").equals([yup.ref('password')], 'Passwords must match')
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });


  const [ isRegistered , setIsRegistered ] = useState(false);
  const [ userInfo , setUserInfo ] = useState(``);
  const [ errMsg , setErrMsg ] = useState("");


  const onSubmit = async (data) => {
    setUserInfo(data)
    try{
      await registerCustomer(userInfo)
      setIsRegistered(true)
      setErrMsg(``)  
      reset();
      } catch (err) {
        if (!err.response) {
          setErrMsg('No Server Response');
      } else if (err.response.status === 500) {
          setErrMsg('Username Taken');
      } else {
          setErrMsg('Registration Failed')
      }
    }
  };

    return (
      <>
      {isRegistered 
        ? 
      <div className='signup-container'>
        <h3>Register Succesed Pleage Log In</h3>
      </div>
        :
      <div className='signup-container'>
        <h2 className='signup-title'>Registration</h2>
        {errMsg}
        <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='signup-form-left'>
            <div className='signup-form-field'>
              <label htmlFor='username'>Username:</label>
              <input 
                type="text"
                id='username'
                name='username'
                {...register('username')}
                />
              {errors.username && <p className="error-message">{errors.username.message}</p>}
            </div>

            <div className='signup-form-field'>
              <label htmlFor='email'>Email:</label>
              <input 
                type="email" 
                id='email'
                name='email'
                {...register('email')}
                />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className='signup-form-field'>
              <label htmlFor='password'>Password:</label>
              <input 
                type="password" 
                id='password'
                name='password'
                {...register('password')}
                />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>


            <div className='signup-form-field'>
              <label htmlFor='confirmPassword'>Confirm Password:</label>
              <input 
                type="password" 
                id='confirmPassword'
                name='confirmPassword'
                {...register('confirmPassword')}
                />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}            
              </div>

          </div>
          <div className='signup-form-right'>
            <div className='signup-form-field'>
              <label htmlFor='firstName'>First Name:</label>
              <input 
                type="text"
                id='firstName'
                name='firstName'
                {...register('firstName')}
              />
            </div>

            <div className='signup-form-field'>
              <label htmlFor='lastName'>Last Name:</label>
              <input 
                type="text" 
                id='lastName'
                name='lastName'
                {...register('lastName')}
              />
            </div>

            <div className='signup-form-field'>
              <label htmlFor='phoneNumber'>Phone Number:</label>
              <input 
                type="text" 
                id='phoneNumber'
                name='phoneNumber'
                {...register('phoneNumber')}
              />
            </div>

            <div className='signup-form-field'>
              <label htmlFor='address'>Address:</label>
              <input 
                type="text" 
                id='address'
                name='address'
                {...register('address')}
              />
            </div>
          </div>
          <button className='signup-btn'>Submit</button>
      </form>
    </div>
    }
    </>
    );
  }
export default Signup

