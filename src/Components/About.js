import React from 'react'
import mypic from '../assets/mypic.jpg'

function About() {
    return (
        <div className="about">
            <div className="container">
                <img src={mypic} className="rounded-circle img-size" alt="Abhijeet" />
                <div className="mt-2">
                    <h3>Abhijeet Nandvikar</h3>
                    <p>
                        Hi, I am Abhijeet Nandvikar, I am 20 years old living in Mumbai. <br />
                        I am learning full stack development. <br />
                        This is my first project for #teamTanayJobChallenge.<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
