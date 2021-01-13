import React from 'react';
import imga from "./images/Pic.jpg"
import "./Header.css";
import Typewriter from 'typewriter-effect';
import audio from './Lightining.mp3'
import sou from "./images/download.png"



function Header(){
    return(
        < >
        <div className="parent">
      
       <div className="rain"> </div>
      <div className="gradient-border" id="box"> <audio controls autoplay loop className="sound" ><source src={audio} type="audio/mp3"/> </audio></div>
      
      <h1 className="overlap">
         
      <a ><img src="https://fontmeme.com/permalink/210105/ae02f08926a971b2277d20f963980278.png" alt="signature-fonts" border="0"/></a>
      </h1>


      <h1 className="heading">WELCOME TO MY WEBSITE</h1>
      <h3 className="about"> ABOUT ME</h3>

      <h1 className="typicals ">
      <Typewriter
  options={{
    strings: ['HELLO👋 I AM AASHUTOSH', 'I AM A WEBDEVELOPER💻',' AND I AM NICE GUY UNTIL YOU PISS ME OFF🖕',],
  
    autoStart: true,
    loop: true,
    pauseFor:1000,
    delay:80,
   
    
  }}
/>

      </h1>
      <div className="icons">
      <a href="https://www.facebook.com/profile.php?id=100004761165879" target="_blank">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fab fa-facebook-f"><img src="https://img.icons8.com/doodle/48/000000/facebook-new.png"/></span>
        </div>
<div class="text">
Facebook</div>
</a>
      <a href="#">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-twitter"><img src="https://img.icons8.com/doodle/48/000000/twitter.png"/></span>
        </div>
<div class="text">
Twitter</div>
</a>
      <a href="https://www.instagram.com/aashutoshjhanwar11/" target="_blank">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-instagram"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></span>
        </div>
<div class="text">
Instagram</div>
</a>
      <a href="https://www.linkedin.com/in/aashutosh-jhanwar-a16895194/"target="_blank">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-linkedin-in"><img src="https://img.icons8.com/doodle/48/000000/linkedin.png"/></span>
        </div>
<div class="text">
Linkedin</div>
</a>
      <a href="https://github.com/aashutoshjhanwar"target="_blank">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="fab fa-youtube"> <img src="https://img.icons8.com/doodle/48/000000/github--v1.png"/></span>
        </div>
<div class="text">
github</div>
</a>
    </div>
     
      </div>
     
        </>
    )
}
export default Header;