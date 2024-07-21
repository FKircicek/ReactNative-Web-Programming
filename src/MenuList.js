import React, { Component } from 'react'
import './css_files/menulist.css'
import MenuItem from './MenuItem.js'
import cheeseburger_image from './menu_pictures/cheeseburger.jpg'
import onionrings_image from './menu_pictures/onion_rings.jpg'
import frenchfries_image from './menu_pictures/fries.jpg'
import chickenburger_image from './menu_pictures/chicken_burger.jpg'
import fizzydrink_image from './menu_pictures/fizzy_drink.jpg'
import water_image from './menu_pictures/water.jpg'
import beefburger_image from './menu_pictures/beef_burger.jpg'
import chickenlegs_image from './menu_pictures/chicken_burger.jpg'
import icecream_image from './menu_pictures/ice_cream.jpg'
import lemonade_image from './menu_pictures/lemonade.jpg'
import pizza_image from './menu_pictures/pizza_slice.jpg'

export default class MenuList extends Component {

    render() {
        const item = [
            {
                id: 1,
                name: "Cheeseburger",
                price: "70 TL",
                image: cheeseburger_image
            },
            {
                id: 2,
                name: "Onion Rings",
                price: "35 TL",
                image: onionrings_image

            },
            {
                id:3,
                name: "French Fries",
                price: "25 TL",
                image: frenchfries_image

            },
            {
                id:4,
                name: "Chicken Burger",
                price: "60 TL",
                image: chickenburger_image
            },
            {
                id:5,
                name: "Fizzy Drink",
                price: "20 TL",
                image: fizzydrink_image
            },
            {
                id:6,
                name: "Water",
                price: "10 TL",
                image: water_image
            },
            {
                id:7,
                name: "Beef Burger",
                price: "90 TL",
                image: beefburger_image
            },
            {
                id:8,
                name: "Chicken Legs",
                price: "45 TL",
                image: chickenlegs_image
            },
            {
                id:9,
                name: "Soft Service Ice Cream",
                price: "15 TL",
                image: icecream_image
            },
            {
                id:10,
                name: "Lemonade",
                price: "13 TL",
                image: lemonade_image
            },
            {
                id:11,
                name: "Pizza Slice",
                price: "50 TL",
                image: pizza_image
            }
        ];


        return (
            <div class="menu-list">
                {item.map(function (item) {
                    return <MenuItem{...item} />
                })}


            </div>
        )
    }
}
