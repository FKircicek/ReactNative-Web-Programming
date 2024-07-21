import React, {Component} from 'react'
import './css_files/header.css'
import AboutUs from './AboutUs'

function aboutUs(){
    var targetDiv = document.getElementById("about-us");
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
    }else{
        targetDiv.style.display = "block";
    };
    
}

export default class Header extends Component{
    render(){
        
        
            return(
                <div>
                    <div class = "navbar">
                        <h1 class="header">Gülbahçe Burger</h1>
                        <ul class="list">
                            <li> <button onClick={aboutUs} class="about-us-button" id="button">About Us</button></li>
                            <li> <button class="mode-button">Switch to Dark Mode</button></li>
                        </ul>
                    </div>
                    <AboutUs></AboutUs>
                    
                    
                </div>
                
                
            )

        
        
    }
}