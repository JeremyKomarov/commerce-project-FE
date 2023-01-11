import React, { useState , useEffect, useRef } from 'react'
import "./Signup.css"
import { register } from "../../../services/api"
import { FaCheck, FaTimes, FaBFaInfoCirclears } from "react-icons/fa";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Signup() {

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState(``);
  const [validUsermame, setValidUsermame] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState(``);
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState(``);
  const [validPasswordMatch, setValidPasswordMatch] = useState(false);
  const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

  const [email, setEmail] = useState(``);
  const [emailFocus, setEmailFocus] = useState(false);

  const [firstName, setFirstName] = useState(``);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState(``);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [address, setAddress] = useState(``);
  const [addressFocus, setAddressFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(``);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(``);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])


useEffect(() => {
    setValidUsermame(USER_REGEX.test(username));
}, [username])


useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidPasswordMatch(password === matchPassword);
}, [password, matchPassword])

useEffect(() => {
    setErrMsg(``);
}, [username, password, matchPassword])

const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }
    try {
        const newUserBody = {
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            username,
            password
        }
        const response = await register(newUserBody);
        setSuccess(true);

        setFirstName(``)
        setLastName(``)
        setEmail(``)
        setPhoneNumber(``)
        setAddress(``)
        setUsername(``);
        setPassword(``);
        setMatchPassword(``);
    } catch (err) {
        if (!err.response) {
            setErrMsg('No Server Response');
        } else if (err.response.status === 400) {
            setErrMsg('Username Taken');
        } else {
            setErrMsg('Registration Failed')
        }
        errRef.current.focus();
    }
}

  return (
    <>
          {success ? (
              <div className="sign-up-container">
                  <h1>Success!</h1>
                  <p>
                      Sign In
                  </p>
              </div>
          ) : (
              <div className="sign-up-container">
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                  <h1 className="sign-up-title">Register</h1>
                  <form className="sign-up-form" onSubmit={handleSubmit}>

                    <div className="sign-up-private">
                      <label htmlFor="username">
                          Username:
{/* 
                          <FaCheck className={validUsermame ? "valid" : "hide"} />
                          <FaTimes className={validUsermame || !username ? "hide" : "invalid"} /> */}
                      
                      </label>
                      <input
                          type="text"
                          id="username"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                          required
                          onFocus={() => setUsernameFocus(true)}
                          onBlur={() => setUsernameFocus(false)}
                      />
                      <p id="uidnote" className={usernameFocus && username && !validUsermame ? "instructions" : "offscreen"}>
                        {/* <FaBFaInfoCirclears /> */}
                       
                          4 to 24 characters.<br />
                          Must begin with a letter.<br />
                          Letters, numbers, underscores, hyphens allowed.
                      </p>

                      <label htmlFor="email">
                          Email:
                      </label>
                      <input
                          type="email"
                          id="email"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                      />
                   

                      <label htmlFor="password">
                          Password:
                          {/* <FaCheck className={validUsermame ? "valid" : "hide"} />
                          <FaTimes className={validUsermame || !username ? "hide" : "invalid"} /> */}
                      </label>
                      <input
                          type="password"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          required
                          onFocus={() => setPasswordFocus(true)}
                          onBlur={() => setPasswordFocus(false)}
                      />
                      <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                      {/* <FaBFaInfoCirclears /> */}
                          8 to 24 characters.<br />
                          Must include uppercase and lowercase letters, a number and a special character.<br />
                          Allowed special characters: <span>!</span> <span aria-label="at symbol">@</span> <span>#</span> <span>$</span> <span>%</span>
                      </p>


                      <label htmlFor="confirm_password">
                          Confirm Password:
                          {/* <FaCheck className={validPasswordMatch && matchPassword ? "valid" : "hide"} />
                          <FaTimes className={validPasswordMatch || !matchPassword ? "hide" : "invalid"} /> */}
                      </label>
                      <input
                          type="password"
                          id="confirm_password"
                          onChange={(e) => setMatchPassword(e.target.value)}
                          value={matchPassword}
                          required
                          onFocus={() => setMatchPasswordFocus(true)}
                          onBlur={() => setMatchPasswordFocus(false)}
                      />
                      
                      <p className={matchPasswordFocus && !validPasswordMatch ? "instructions" : "offscreen"}>
                          {/* <FaBFaInfoCirclears /> */}
                          Must match the first password input field.
                      </p>
                      </div>
                      <div className="sign-up-nonprivate">  
                        <label htmlFor="firstName">
                          First Name:
                      </label>
                      <input
                          type="text"
                          id="firstName"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                          required
                          onFocus={() => setFirstNameFocus(true)}
                          onBlur={() => setFirstNameFocus(false)}
                      />

                        <label htmlFor="lastName">
                          Last Name:
                      </label>
                      <input
                          type="text"
                          id="lastName"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                          required
                          onFocus={() => setLastNameFocus(true)}
                          onBlur={() => setLastNameFocus(false)}
                      />

                    <label htmlFor="phoneNumber">
                          Phone Number:
                      </label>
                      <input
                          type="text"
                          id="phoneNumber"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          value={phoneNumber}
                          required
                          onFocus={() => setPhoneNumberFocus(true)}
                          onBlur={() => setPhoneNumberFocus(false)}
                      />

                        <label htmlFor="address">
                          Full Address:
                      </label>
                      <input
                          type="text"
                          id="address"
                          ref={userRef}
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                          required
                          onFocus={() => setAddressFocus(true)}
                          onBlur={() => setAddressFocus(false)}
                      />
                      </div>
                      <button className="sign-up-btn" disabled={!validUsermame || !validPassword || !validPasswordMatch ? true : false}>Sign Up</button>
                  </form>
              </div>
              )}
      </>
  )
}

export default Signup