import React, {Component} from 'react'
import './css_files/namebox.css'

function experience(){
    var name = document.getElementById("name").value;
    var targetDiv = document.getElementById("experience");
    var targetDiv2 = document.getElementById("experience2");
    targetDiv.style.display = "none";
    targetDiv2.style.display = "flex";
    document.getElementById("experience-name").innerHTML = name;
}

export default class NameBox extends Component{

    render(){
        return(
            <div>
                <div class="experience" id="experience">
                    <p>Please enter your name for a personalized experience: </p>
                    <input type="text" id="name"/>
                    <button onClick={experience} type="button" id="experience-button">Submit</button>
                </div>
                <div class="experience" id="experience2">
                    <p>Welcome, </p>
                    <p id="experience-name">-Name-</p>
                </div>
            </div>
            
        )
    }
}