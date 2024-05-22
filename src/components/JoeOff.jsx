import React from 'react'
import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import locationImg from "../assets/location.svg";
import bagImg from "../assets/briefcase.svg";
import twitterImg from "../assets/twitter.svg";
import linkedImg from "../assets/linkedin.svg";
const JoeOff = () => {
    const [show, setShow] = useState(false);

    const [bioProfile, setBioProfile] = useState([]);
 const getBioProfile = async () => {
    try {
      const request = await fetch("https://em-server-3xek.onrender.com//api/v1/users", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      console.log(response.user);
      setBioProfile(response.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBioProfile();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div onClick={handleShow}>
        <img src={bioProfile?.profilePhoto}  className=" border rounded-pill" style={{width:"100px"}}  />
    </div>
    
 <div className='container'>
 <Offcanvas show={show} onHide={handleClose}  >
        <Offcanvas.Header closeButton>
        <div className="d-flex align-items-center gap-2 mt-2">
                  <img src={bioProfile?.profilePhoto}  alt="john-img" />
                  <div className="d-flex flex-column ">
                    <span className="">John Doe</span>
                    <span className="">0 friends</span>
                  </div>
                </div>
              
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
        <div className="joeBio ">
               
             
                {/* work section */}
                <div>
                  <h4>Bio</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum impedit quis rerum inventore distinctio ad quos,
                    quam voluptate iusto! Illum nisi vel quas sit pariatur.
                  </p>
                </div>
                <hr />
                {/* work bio */}
                <div>
                  <h4>Info</h4>
                  <div className="d-flex align-items-center gap-2">
                    <img src={locationImg} alt="bag-img" />{" "}
                    <span>Location</span>
                  </div>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <img src={bagImg} alt="" /> <span>Realtor</span>
                  </div>
                </div>
                <hr />

                {/* media bio */}
                <div>
                  <h4>Socials</h4>
                  <div className="d-flex align-items-center gap-2">
                    <img src={twitterImg} alt="" />
                    <span>Twitter</span>
                  </div>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <img src={linkedImg} alt="" />
                    <span>LinkedIn</span>
                  </div>
                </div>
                </div>
        </Offcanvas.Body>
      </Offcanvas>
 </div>
     
    </>
  )
}

export default JoeOff