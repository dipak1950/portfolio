import React from 'react'

function About() {
  return (
    <section>
      <div className="about w-12">
        <div className="container">
          <div className="row">
            <div className="main">
              <img src="images/DSC_0773.JPG" alt="Dipak " />
              <div className="about-text">
                <h2>About Me</h2>
                <h5>Devloper <span>&amp; Designer</span></h5>
                <p>I am a Front-end Web devloper. I can provide clean code and pixel perfect Design. I
                  also make the Website more &amp; more interactive with web animations. I can provide
                  clean code and pixel perfect design. I also make the Website more &amp; more interactive
                  with web animations. A responsivedesign makes your Website accessible to all users,
                  regardless of their device.</p>
                <a href="https://linktr.ee/dipaknimavat"><button type="button">Lets's Talk</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;