import React, {Component} from 'react'
import './css_files/footer.css'
import ContactInfo from './ContactInfo'
import Location from './Location'
function contactInfo(){
    var targetDiv = document.getElementById("contact-info");
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
    }else{
        targetDiv.style.display = "flex";
    }
}
function locations(){
    var targetDiv = document.getElementById("location");
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none";
    }else{
        targetDiv.style.display = "flex";
    }
}


export default class Footer extends Component{
    render(){
        return(
            <div>
                <div class="footer" id="footer">
                    <button onClick={contactInfo} class="contact-info-button" id="">Contact Info</button>
                    <button onClick = {locations} class="location-button" id="">Location</button>
                </div>
                <ContactInfo></ContactInfo>
                <Location></Location>
                
            </div>
        )
    }
}