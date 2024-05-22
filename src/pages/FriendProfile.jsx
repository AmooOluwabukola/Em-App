import React from 'react'
import Navbar from "../layouts/Navbar";
import "../styles/Home.css";
import johnImg from "../assets/joeImg.svg";
import YujiImg from '../assets/Yuji.svg'
import locationImg from "../assets/location.svg";
import bagImg from "../assets/briefcase.svg";
import twitterImg from "../assets/twitter.svg";
import linkedImg from "../assets/linkedin.svg";
import photoImg from "../assets/gallery.svg";
import { Link } from "react-router-dom";
import { FriendsData, people } from "../Db";
import loveImg from "../assets/heart (1).svg";
import loveRed from '../assets/heart.svg';
import commentImg from "../assets/messages-2.svg";
import shareImg from "../assets/send-2.svg";
import FooterNav from "../components/FooterNav";

import Followers from '../assets/people.svg'
import Following from '../assets/profile-2user.png'
import Like from '../assets/like.svg'
import YujiOff from '../components/YujiOff';
const FriendProfile = () => {
  return (
   <>
   <Navbar/>
   {/* john section */}
      <div className="bg-light">
        <div className="container position-sticky  ">
          <div >
            <main className=" row main-parent gap-2 pt-3">
              {/* first section */}

              <section className="rounded-2 col-lg-4  border  bg-white h-50 sticky ">
                {/*yuji img */}
                <div className="joeBio d-none d-lg-block mt-2">
                <div className="d-flex align-items-center gap-2">
                  <img src={YujiImg} alt="john-img" />
                  <div className="d-flex flex-column ">
                    <span className="">Yuji Itadori</span>
                    <span className="">0 friends</span>
                  </div>
                </div>
                <hr />
                {/* work section */}
                <div>
                  <h4>Bio</h4>
                  <p>
                  Lorem ipsum dolor sit amet consectetur. Mi nec turpis vulputate sed. Tellus quisque pharetra facilisi nisl nisi consectetur. Sed in nisi convallis vitae tortor rhoncus.
                  </p>
                </div>
                <hr />
                {/* activities */}
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
                  <div className="d-flex align-items-center mt-2 gap-3">
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
                
              </section>

{/* section 2 */}
              <section className="col-lg ">
              <div className=" mb-5  bg-white">
                  {FriendsData.map((data) => {
                    const {
                      id,
                      title,
                      time,
                      description,
                      profile,
                      image,
                      statusbar,
                    } = data;
                    return (
                      <div key={id} className="p-2  border rounded-2 scroll-page  mb-3">
                        {/* top div */}
                        <div className="d-flex justify-content-between align-items-center ">
                          {/* img and time */}
                          <div className="d-flex gap-2 align-items-center">
                            <img src={profile} alt="" className="d-none d-lg-block"/>
                            <div className="d-lg-none">
                    <YujiOff/>
                    </div>
                            <span className="d-flex flex-column justify-content-center ">
                              <Link to={"../FriendProfile"} className="text-decoration-none">
                                <h5 className="pt-3">{title}</h5>
                                <span></span>
                              </Link>
                              <p>{time}</p>
                            </span>
                          </div>

                          {/* btn-div */}
                          <div>
                            <button className="btn btn-white btn-sm rounded-pill border px-4">
                              {statusbar}
                            </button>
                          </div>
                        </div>

                        {/* post */}
                        <p>{description}</p>

                        {/* post-img */}
                        <img src={image} className="w-100" alt="" />

                        {/* reactions */}
                        <main className="d-flex pt-2 justify-content-between align-items-center">
                          {/* like and comment */}

                          <div className="d-flex gap-2">
                            <img src={loveImg} alt="" role="button" />
                            <img src={commentImg} alt="" role="button" />
                          </div>

                          {/* share */}
                          <div>
                            <img src={shareImg} alt="" role="button" />
                          </div>
                        </main>
                      </div>
                    );
                  })}
                </div>
              </section>
              </main>
              </div>
              </div>
              </div>
              <FooterNav/>    
   </>
  )
}

export default FriendProfile