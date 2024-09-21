import React from 'react'
import image1 from "../components/images/photo.png"
const About = () => {
    return (
        <div>
            <section class="hero-section">
                <div class="content-container">
                    <div class="text-content">
                        <h1>Create and sell custom products</h1>
                        <ul>
                            <li>100% Free to use</li>
                            <li>900+ High-Quality Products</li>
                            <li>Largest global print network</li>
                        </ul>
                        <div class="cta-buttons">
                            <a href="#" class="start-btn">Start for free</a>
                            <a href="#" class="how-btn">
                                <span>How it works?</span>
                            </a>
                        </div>
                        <p class="trusted">Trusted by over 8M sellers around the world</p>
                    </div>
                    <div>
                        <img className='hero-image' src={image1} alt="Business Solutions" />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
