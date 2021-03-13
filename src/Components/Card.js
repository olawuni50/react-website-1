import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function Card() {
    return (
        <div className="cards">
            <h1>Check out this Epic Destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems src="images/img-9.jpg" text="Explore the hidden
                        waterfall deep inside the Amason Jungle" label="Adventure" path="/services"/>

                        <CardItems src="images/img-2.jpg" text="Travel through the Island of Bali in a 
                        Private Cruise"
                         label="Luxury" path="/services"/>                    
                      
                    </ul>
                    <ul className="cards__items">
                        <CardItems src="images/img-4.jpg" text="Ride from the Highland to your room"
                         label="Adventure" path="/services"/>

                        <CardItems src="images/img-5.jpg" text="A nice place to enjoy life"
                         label="Luxury" path="/services"/>                    
                      
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Card
