import React, { useState , useEffect, useRef,  } from 'react'
// import "./Signup.css"
import { register } from "../../../services/api"
import { FaCheck, FaTimes, FaBFaInfoCirclears } from "react-icons/fa";
import { useForm } from 'react-hook-form';




function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Username:" {...register("Username:", {required: true})} />
        <input type="email" placeholder="Email:" {...register("Email:", {required: true})} />
        <input type="password" placeholder="Password:" {...register("Password:", {})} />
        <input type="password" placeholder="Confirm Password:" {...register("Confirm Password:", {required: true})} />
        <input type="text" placeholder=" First Name:" {...register(" First Name:", {required: true})} />
        <input type="text" placeholder="Last Name:" {...register("Last Name:", {})} />
        <input type="text" placeholder="Phone Number:" {...register("Phone Number:", {})} />
        <input type="text" placeholder="Full Address:" {...register("Full Address:", {})} />
  
        <input type="submit" />
      </form>
    );
  }
export default Signup