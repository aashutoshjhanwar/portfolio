import React from 'react';
import "./Middle.css"
import imga from "./images/Pic.jpg"
import imgas from "./images/mpuat.jpg"
import imgas1 from "./images/VKV.jpg"
import imgas2 from "./images/shivjoyti.jpg"
import Imagca from "./images/ASJ.jpg"
import rota from "./images/rotate1.jpg"
import rota1 from "./images/rotatae2.jpg"
import rota2 from "./images/rotate3.jpg"
import rota3 from "./images/rotate4.jpg"




function Middle (){
    return(
<>

<div className="light" id="bijli">
    <h1 className="alag">
        ABOUT-ME
    </h1>
    <div className="raining"> </div>
    <div className="cloud"></div>
    <div>
    <figure className="swing">
  <img src={imga} width="200" height="280px" ></img>
</figure> 
<figure className="swings">
  <img src={Imagca} width="200" height="280px" ></img>
</figure> 
</div>
<h1 className="me">ABOUT-ME</h1>
 <div class="rotation">
        <span class="don1"><img src={rota} alt="" height="300px"></img></span>
        <span class="don2"><img src={rota1} alt=""></img></span>
        <span class="don3"><img src={rota2} alt=""></img></span>
        <span class="don4"><img src={rota3} alt=""></img></span>
        <span class="don5"><img src={rota} alt=""></img></span>
        <span class="don6"><img src={rota1} alt=""></img></span>
        <span class="don7"><img src={rota2} alt=""></img></span>
        <span class="don8"><img src={rota3} alt=""></img></span>
    </div>

  </div>
  
</>
    )
}
export default Middle;