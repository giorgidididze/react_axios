import React, {useEffect, useState} from 'react';
import Logo from "./image/React_logo_wordmark.png";
import { SocialIcon } from 'react-social-icons';
import Wallpaper from "./image/Travel-Category-Pic-1536x486.png";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";


const baseURL = "https://api.npoint.io/44c1c313d40c0811ad19";

function Home() {

  window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  
   const openprofile = () =>{
    navigate("/about", this.state.first);

   }

   const logout = () => {
    navigate("/");
   }
  return (
    <> 
    <header>
      <div><img className='logo' src={Logo} alt='logo' /></div>
      <div><h2 className='main-title home'>Home</h2></div>
      <div><h2 className='main-title' onClick={logout}>Log Out</h2></div>
      <div><SocialIcon url="https://www.facebook.com/" /><SocialIcon url="https://www.instagram.com/" /></div>
    </header>
 <div className='aside'>
       <div><img className='wallpaper' src={Wallpaper} alt="wallpaper" /></div>
      <h1>Our Posts</h1><div className='line'></div>
      <p className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora omnis cumque quos quidem est dolore? Blanditiis!</p>
      
      <div className='card-conteiners'>
        {post.map((bra) => (
        <div className='card'>
        <img src={bra.image} alt="intel" />
        <h5>{bra.title}</h5>
        <p className='card-para'>{bra.description}</p>
        <Link tag="a" to="/about" state={bra} onClick={()=>openprofile}>Learn More</Link>
        </div>))}
      </div>
    </div>
    <footer>
    <div><p>Made with Giorgi Dididze</p></div>
    <div><SocialIcon className='icon-svg-conteiner' url="https://www.facebook.com/" /><SocialIcon className='icon-svg-conteiner' url="https://twitter.com/" />
    <SocialIcon className='icon-svg-conteiner' url="https://www.google.com/" /><SocialIcon className='icon-svg-conteiner' url="https://www.pinterest.com/" />
    </div>
  </footer>
  
    </>
  )
}

export default Home;
