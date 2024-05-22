import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import notifiImg from '../assets/notificationIcon.png'
import logOutImg from '../assets/logout.svg';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';
import EditImg from '../assets/edit-2.png'
import profileImg from '../assets/JoePic.png';
const FooterNavBag = () => {
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div onClick={handleShow}>
        <img src={bioProfile?.profilePhoto} alt=""  className='w-50 me-2'/>
    </div>
    <div >
    <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
         
        </Offcanvas.Header>
        <Offcanvas.Body>
        <section className='bg-white rounded-2 border p-3   position-relative z-1'>
        {/* Edit */}
        <div className='mb-4'>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start'>
            <EditProfile />
            <img src={EditImg} alt="" />
            <span className='fw-lighter'>Edit Profile</span>
          </div>
          <hr />
        </div>

        {/* Notification */}
        <div className='mb-4'>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start'>
            <Link to='#'>
              <img src={notifiImg} alt='' />
            </Link>
            <span className='fw-lighter'>Notifications</span>
          </div>
          <hr />
        </div>

        {/* Logout */}
        <div>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start '>
            <Link to='../SignIn'>
              <img src={logOutImg} alt='' />
            </Link>
            <span className='fw-lighter'>Log Out</span>
          </div>
          <hr />
        </div>
      </section>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
     
    </>
  )
}
function Footer() {
    return (
      <>
        {[ 'bottom'].map((placement, idx) => (
          <FooterNavBag key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  
 

export default Footer