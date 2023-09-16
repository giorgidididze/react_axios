import React from 'react';
import Logo from "./image/React_logo_wordmark.png";
import { SocialIcon } from 'react-social-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin: auto;
`;

const BackColor = styled.div`
  width: 100%;
  height: 250px;
  background-color: #627081;
`;


function About() {
const navigate = useNavigate();
 const location = useLocation();

 const logout = () => {
  navigate("/");
 }
 
 const beckHome = () =>{
  navigate("/home");
 }

  return (
    <>
    <header>
      <div><img className='logo' src={Logo} alt='logo' /></div>
      <div className='para-ori'><h2 className='main-title' onClick={beckHome}>Home</h2>
       <h2 className='main-title' onClick={logout}>Log Out</h2></div>
      <div><SocialIcon url="https://www.facebook.com/" /><SocialIcon url="https://www.instagram.com/" /></div>
    </header>
    <StyledWrapper>
      <BackColor></BackColor>
        <div className='cardous'>
        <img src={location.state.image} alt="intel" />
        <h5>{location.state.title}</h5>
        <p className='card-paraous'>{location.state.description}</p>
        </div>
      </StyledWrapper>
    <footer>
    <div><p>Made with Giorgi Dididze</p></div>
    <div><SocialIcon className='icon-svg-conteiner' url="https://www.facebook.com/" /><SocialIcon className='icon-svg-conteiner' url="https://twitter.com/" />
    <SocialIcon className='icon-svg-conteiner' url="https://www.google.com/" /><SocialIcon className='icon-svg-conteiner' url="https://www.pinterest.com/" />
    </div>
  </footer>
    </>
  )
}

export default About
