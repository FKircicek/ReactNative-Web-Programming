import React, {Component} from 'react'
import map from './extra_pictures/fake_map_location.png'
import './css_files/location.css'





export default class Location extends Component{
    render(){
        return(
            <div class="location" id="location">
                <div class="address">
                    <p>Address:</p><br/>
                    <p>12087 Sk. Gülbahçe/Urla/İzmir</p>
                </div>
                <div class="map">
                    <img src={map} alt = "map" width="600" height="300"/>
                </div>
            </div>
        )
    }
}