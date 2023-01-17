import React from 'react'
import './Resume.css';

function Resume() {

    return (
        <div className="resume-main">
            <div className="left-box">
                <br /><br />
                <div className="profile">
                    <img src="images/Dipak.jpg" />
                </div>
                <div className="content-box">
                    <h2>Profile Info</h2>
                    <hr className="hr1" />
                    <p className="p1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <h3>Language:</h3>
                    <p className="p2">Gujarati</p>
                    <div id="progress2" />
                    <p className="p2">English</p>
                    <div id="progress" />
                    <p className="p2">Hindi</p>
                    <div id="progress1" />
                    <br /><br />
                    <h2>My Skills</h2>
                    <hr className="hr1" />
                    <br />
                    <div className="col-div-6"><p className="p2">HTML</p></div>
                    <div className="col-div-6">
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle1" />
                    </div>
                    <div className="clearfix" />
                    <div className="col-div-6"><p className="p2">CSS</p></div>
                    <div className="col-div-6">
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle1" />
                        <i className="fa fa-circle circle1" />
                    </div>
                    <div className="clearfix" />
                    <div className="col-div-6"><p className="p2">BOOTSTRAP</p></div>
                    <div className="col-div-6">
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle1" />
                        <i className="fa fa-circle circle1" />
                    </div>
                    <div className="clearfix" />
                    <div className="col-div-6"><p className="p2">WORDPRESS</p></div>
                    <div className="col-div-6">
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle1" />
                    </div>
                    <div className="clearfix" />
                    <div className="col-div-6"><p className="p2">JAVASCRIPT</p></div>
                    <div className="col-div-6">
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle1" />
                        <i className="fa fa-circle circle1" />
                        <i className="fa fa-circle circle1" />
                    </div>
                    <div className="clearfix" />
                    <div className="col-div-6"><p className="p2">REACT JS</p></div>
                    <div className="col-div-6">
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle" />
                        <i className="fa fa-circle circle1" />
                        <i className="fa fa-circle circle1" />
                        <i className="fa fa-circle circle1" />
                    </div>
                    <div className="clearfix" />
                    <br />
                    <h2>interests</h2>
                    <hr className="hr1" />
                    <br />
                    <div className="col-div-3 col3">
                        <i className="fa fa-futbol-o in" />
                        <span className="inp">Sports</span>
                    </div>
                    <div className="col-div-3 col3">
                        <i className="fa fa-futbol-o in" />
                        <span className="inp">Drive</span>
                    </div>
                    <div className="col-div-3 col3">
                        <i className="fa fa-futbol-o in" />
                        <span className="inp">Reading</span>
                    </div>
                </div>
            </div>
            <div className="right-box">
                <h1>
                    Dipak<br />
                    <span>Nimavat</span>
                </h1>
                <p className="p3">FRONT END DEVLOPER</p>
                <br />
                <h2 className="heading">Work Experience</h2>
                <hr className="hr2" />
                <br />
                <div className="col-div-4">
                    <p className="p5">2020-2021</p>
                    <span className="span1">Company Name</span>
                </div>
                <div className="col-div-8">
                    <p className="p5">Web Designer</p>
                    <span className="span1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
                <div className="clearfix" />
                <br />
                <div className="col-div-4">
                    <p className="p5">2021-2022</p>
                    <span className="span1">Company Name</span>
                </div>
                <div className="col-div-8">
                    <p className="p5">Web Devloper</p>
                    <span className="span1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                </div>
                <div className="clearfix" />
                <br />
                <div className="clearfix" />
                <br />
                <h2 className="heading">My Education</h2>
                <hr className="hr2" />
                <br />
                <div className="col-div-4">
                    <p className="p5">2020-2021</p>
                    <span className="span1">Surat</span>
                </div>
                <div className="col-div-8">
                    <p className="p5">12th</p>
                    <span className="span1">Sarswati Vidyalay</span>
                </div>
                <div className="clearfix" />
                <br />
                <div className="col-div-4">
                    <p className="p5">2021-2022</p>
                    <span className="span1">Ahmedabad</span>
                </div>
                <div className="col-div-8">
                    <p className="p5">BCA</p>
                    <span className="span1">Gujarat University</span>
                </div>
                <div className="clearfix" />
                <br />
                <div className="col-div-4">
                    <p className="p5">2021-2022</p>
                    <span className="span1">Surat</span>
                </div>
                <div className="col-div-8">
                    <p className="p5">Front end Devloper</p>
                    <span className="span1">Red and White Multimedia Education</span>
                </div>
            </div>
            <div className="clearfix" />
        </div >
    )
}

export default Resume