import React from 'react'

import "./Contact.css"




function Contact() {
    return(

        <>
<div className="modi">
<div className="rains"> </div>

<div className="lattus">
    <h1 className="lattuds"> CONTACT</h1>
</div>

    <div id="wrap">
    <h1 class="maa">send a message</h1>
    <div id="form-wrap">
	<form action="https://formspree.io/f/moqpypgk" method="POST">
			
			<label for="email"> your message:</label>
            <br/>
			<input name="message" type="text" />
		
			<br/>		
            	<label for="name">Name:</label>
			<input type="text" name="name" />
		
			<label for="email">Email:  </label>
			<input type="text" name="email" />
            
          
			<button type="submit" class="saap">send </button>		
		</form>
    </div>
    </div>
    
</div>

</>
        
    )
}

export default Contact;