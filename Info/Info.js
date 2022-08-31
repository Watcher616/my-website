import React from "react"


export default function Info(){
    return(
        <div className = "info-container">
        <img id= "profile" src= "./images/profile.png"/>
        <h2 id="name">Arexon Mortel</h2>
        <h4 id="prof">Web Developer</h4>
        <a href="#" id="my-website">Mortel.Website</a>
        <div className= "button-container">
            <a href="#" className ="social" id="email">
                <img className="icon"  src="images/mail.png"/> <span> Email</span>
            </a>  
            <a href="#"className ="social" id="linkedin">
                <img  className="icon"  src="images/linkedin.png"/> <span>LinkedIn</span>
            </a>  
        </div>
        </div>
    )
    
}