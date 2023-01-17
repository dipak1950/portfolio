import React from 'react'

function Service() {

  return (
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
  )
}

export default Service;