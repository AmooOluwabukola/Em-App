import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import JoePic from '../assets/joeImg.svg'
import YujiImg from '../assets/Yuji.svg'
import locationImg from "../assets/location.svg";
import bagImg from "../assets/briefcase.svg";
import twitterImg from "../assets/twitter.svg";
import linkedImg from "../assets/linkedin.svg";
import Followers from '../assets/people.svg'
import Following from '../assets/profile-2user.png'
import Like from '../assets/like.svg'
const YujiOff = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div onClick={handleShow}>
        <img src={YujiImg} alt="" />
    </div>
    
 <div className='container'>
 <Offcanvas show={show} onHide={handleClose}  >
        <Offcanvas.Header closeButton>
        <div className="d-flex align-items-center gap-2">
                  <img src={YujiImg} alt="john-img" />
                  <div className="d-flex flex-column ">
                    <span className="">Yuji Itadori</span>
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

                {/* Activities */}

                <div >
                   <h4>Activities</h4>
                   <div className="d-flex justify-content-between gap-2 mb-3">
                   
                     <div className='d-flex gap-2 '>
                     <img src={Followers} alt="" />
                     <span className='px-3'>Followers</span> 
                     </div>
                     <span   className='ps-5'>1000</span>
                   </div>

                   <div className="d-flex justify-content-between gap-2 mb-3">
                   
                     <div className='d-flex gap-2 '>
                     <img src={Following} alt="" />
                     <span className='px-3'>Following</span> 
                     </div>
                     <span   className='ps-5'>1000</span>
                   </div>

                   <div className="d-flex justify-content-between gap-2 mb-3">
                   
                     <div className='d-flex gap-2 '>
                     <img src={Like} alt="" />
                     <span className='px-3'>Likes</span> 
                     </div>
                     <span   className='ps-5'>1000</span>
                   </div>

                
                </div>
                <hr />
                {/* work bio */}
                <div>
                  <h4>Info</h4>
                  <div className="d-flex align-items-center gap-2">
                    <img src={locationImg} alt="bag-img" />{" "}
                    <span>Lagos, Nigeria</span>
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

export default YujiOff