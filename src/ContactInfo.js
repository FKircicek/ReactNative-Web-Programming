import React, {Component} from 'react'
import phoneemblem from './extra_pictures/phone emblem.jpg'
import instagram from './extra_pictures/instagram_emblem.webp'
import twitter from './extra_pictures/twitter_emblem.jpg'
import mail from './extra_pictures/mail_emblem.png' 
import './css_files/contactinfo.css'

export default class ContactInfo extends Component{
    render(){
        return(
            <div class="contact-info" id="contact-info">
                <div class="icons">
                    <img src={phoneemblem} alt="phone" width="30" height="30"/>
                    <p>+90 123 456 7788</p>
                </div>
                <div class="icons">
                    <img src={instagram} alt = "instagram" width="30" height="30"/>
                    <p>instagram.com/gbahceburger</p>
                </div>
                <div class="icons">
                    <img src={twitter} alt = "twitter" width="30" height="30"/>
                    <p>twitter.com/gbahceburger</p>
                </div>
                <div class="icons">
                    <img src={mail} alt = "mail" width="30" height="30"/>
                    <p>gbahceburger@mail.com</p>
                </div>
            </div>
        )
    }
}