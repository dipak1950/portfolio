import React from 'react'

function Home() {

  return (
    <>
      <main>
        <section>
          <div className='hero'>
            <div className='container'>
              <div className='row'>
                <div className="content">
                  <h4>Hello, my name is</h4>
                  <h1>Dipak <span>Nimavat</span></h1>
                  <h3>I'am Web Devloper.</h3>
                  <div className="newslatter">
                    <form>
                      <input type="email" name="email" id="mail" placeholder="Enter Your Email" />
                      <input type="Submit" name="submit" defaultValue="Lets Starts" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        {/* services section */}
        <section className="service">
          <div className="container">
            <div className="row">
              <div className="service w-12">
                <div className="title">
                  <h2>Our Services</h2>
                </div>
                <div className="box">
                  <div className="card">
                    <i className="fa-solid fa-bars" />
                    <h5>Web Devlopment</h5>
                    <div className="pra">
                      <p>Every Website should be built with two primary goals: Firstly, it needs to work
                        across all services. Secondly, it needs to be fast as possible.</p>
                      <p style={{ textAlign: 'center' }}>
                        <a className="button" href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <i className="fa-regular fa-user" />
                    <h5>Web Devlopment</h5>
                    <div className="pra">
                      <p>Every Website should be built with two primary goals: Firstly, it needs to work
                        across all services. Secondly, it needs to be fast as possible.</p>
                      <p style={{ textAlign: 'center' }}>
                        <a className="button" href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <i className="fa-regular fa-bell" />
                    <h5>Web Devlopment</h5>
                    <div className="pra">
                      <p>Every Website should be built with two primary goals: Firstly, it needs to work
                        across all services. Secondly, it needs to be fast as possible.</p>
                      <p style={{ textAlign: 'center' }}>
                        <a className="button" href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contect-me">
          <div className="container">
            <div className="row">
              <div className="contect-me w-12">
                <p>Let Me Get You A Beautiful Website.</p>
                <a className="button-two" href="https://www.linkedin.com/in/dipak-nimavat-875202231">Hire Me</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;