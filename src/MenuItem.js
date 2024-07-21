import React, {Component} from 'react'
import './css_files/menuitem.css'


export default class MenuItem extends Component{
    
    render(){
        return(
            
            <div class = "menu-item">
                <img src={this.props.image} alt='Food' width="250" height="180"/>
                <div class = "info">
                    <p class = "item-name">{this.props.name}</p>
                    <p class = "price">{this.props.price}</p>
                </div>
            </div>
        )
    }
}