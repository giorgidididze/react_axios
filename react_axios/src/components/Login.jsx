import React, { useState, useEffect } from 'react';
import axios from "axios";
import Logo from "./image/React_logo_wordmark.png";
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from 'react-router-dom';


const baseURL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [login, setLogin] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const [buttonText, setButtonText] = useState("Log In");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLogin(response.data);
    });
  }, []);


const handleSubmit = (event) => {
  event.preventDefault();
    for (let x = 0; x< login.length; x++) {
  if (firstName === login[x].username && email===login[x].email){
    navigate("/home")
    }
  }
  if (firstName === '' || email === "" || password==="") {
    setIsSignup(!isSignup)
  }
if (password.length < 8) {
  setIsSignup(!isSignup)
  }


    let countUpperCase = 0
    // variable to count lowercase characters in the password.
    let countLowerCase = 0
    // variable to count digit characters in the password.
    let countDigit = 0
    // variable to count special characters in the password.
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (password[i] === password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (password[i] === password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    if (countLowerCase === 0 || countUpperCase === 0 || countDigit === 0 || countSpecialCharacters === 0) {
      setIsSignup(!isSignup)
    }
  }

  const changeButtonText = () => {
    buttonText === "Log In"
      ? setButtonText("Go Back!")
      : setButtonText("Log In");
  };
 

  return (
    <>
    <header>
      <div><img className='logo' src={Logo} alt='logo' /></div>
      <div><h2 className='main-title'>login</h2></div>
      <div><SocialIcon url="https://www.facebook.com/" /><SocialIcon url="https://www.instagram.com/" /></div>
    </header>
  <main>
  <div className={`container ${isSignup ? "right-panel-active" : ""}`}>
      <div className="form-container sign-in-container">
        <form className='login-form' onSubmit={handleSubmit}>
        <div className={` ${isSignup ? "angry-image" : ""}`}>
          <div className={` ${isSignup ? "red-cubic" : ""}`}>
          <label className='span'>Username</label>
           <input type="text" name="text" placeholder="Please Enter..." onChange={(e) => setFirstName(e.target.value)} />
           <label className='span'>Email</label>
          <input type="email" name="email" placeholder="Please Enter..." onChange={(e) => setEmail(e.target.value)}/>
          <label className='span'>Password</label>
          <input type="password" name="password" placeholder="Please Enter..." onChange={(e) => setPassword(e.target.value)}/>
          </div>
          </div>
          <button className='but-log' type="submit" onClick={changeButtonText}>{buttonText}</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
              <p className='info-news'>To keep connected with us please login with your personal info </p>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p className='info-news'>Enter your details and start the journey with us</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div><p>Made with Giorgi Dididze</p></div>
    <div><SocialIcon className='icon-svg-conteiner' url="https://www.facebook.com/" /><SocialIcon className='icon-svg-conteiner' url="https://twitter.com/" />
    <SocialIcon className='icon-svg-conteiner' url="https://www.google.com/" /><SocialIcon className='icon-svg-conteiner' url="https://www.pinterest.com/" />
    </div>
  </footer>
      </>
  )
  
}

export default App