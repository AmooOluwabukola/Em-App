// import React, { useEffect, useState } from "react";
// import Navbar from "../layouts/Navbar";
// import { useParams } from "react-router-dom";
// import Bio from "../components/Bio"
// import { Link } from "react-router-dom";
// import { FriendsData, people } from "../Db";
// import loveImg from "../assets/heart (1).svg";
// import loveRed from '../assets/heart.svg';
// import commentImg from "../assets/messages-2.svg";
// import shareImg from "../assets/send-2.svg";
// import FooterNav from "../components/FooterNav";

// import Followers from '../assets/people.svg'
// import Following from '../assets/profile-2user.png'
// import Like from '../assets/like.svg'
// const SingleUserProfile = () => {
//   const [data, setData] = useState([]);
//   const { userId } = useParams();
//   console.log(userId);
//   const getData = async () => {
//     const request = await fetch(
//       `http://localhost:5780/api/v1/users/userprofile/${userId}`
//     );
//     const response = await request.json();
//     console.log(response.user);
//     setData(response.user);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <main className="container">

//         <div className="row gap-2 pt-3">
//         <h1> {data?.userName} </h1>
//         <Bio/>
//         <section className="col-lg ">
//               <div className=" mb-5  bg-white">
//                   {FriendsData.map((data) => {
//                     const {
//                       id,
//                       title,
//                       time,
//                       description,
//                       profile,
//                       image,
//                       statusbar,
//                     } = data;
//                     return (
//                       <div key={id} className="p-2  border rounded-2 scroll-page  mb-3">

//                         <div className="d-flex justify-content-between align-items-center ">

//                           <div className="d-flex gap-2 align-items-center">
//                             <img src={profile} alt="" className="d-none d-lg-block"/>
//                             <div className="d-lg-none">

//                     </div>
//                             <span className="d-flex flex-column justify-content-center ">
//                               <Link to={"../FriendProfile"} className="text-decoration-none">
//                                 <h5 className="pt-3">{title}</h5>
//                                 <span></span>
//                               </Link>
//                               <p>{time}</p>
//                             </span>
//                           </div>

//                           <div>
//                             <button className="btn btn-white btn-sm rounded-pill border px-4">
//                               {statusbar}
//                             </button>
//                           </div>
//                         </div>

//                         <p>{description}</p>

//                         <img src={image} className="w-100" alt="" />

//                         <main className="d-flex pt-2 justify-content-between align-items-center">

//                           <div className="d-flex gap-2">
//                             <img src={loveImg} alt="" role="button" />
//                             <img src={commentImg} alt="" role="button" />
//                           </div>

//                           <div>
//                             <img src={shareImg} alt="" role="button" />
//                           </div>
//                         </main>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </section>
//         </div>
//       </main>
//     </>
//   );
// };

// export default SingleUserProfile;

import React, { useState, useEffect } from "react";
import locationImg from "../assets/location.svg";
import bagImg from "../assets/briefcase.svg";
import twitterImg from "../assets/twitter.svg";
import linkedImg from "../assets/linkedin.svg";
import Navbar from "../layouts/Navbar";
const Bio = () => {
  const [bioProfile, setBioProfile] = useState([]);

  // const bioProfile =
  const token = localStorage.getItem("clientToken");
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
    // document.title = "Home | Page";

    getBioProfile();
  }, []);
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="row gap-2 pt-3">
          <h1> {bioProfile?.userName} </h1>
          <section className="rounded-2 col-lg-4  border  bg-white ">
            {/* john img */}

            <div className="joeBio d-none d-lg-block mt-2">
              <div className="d-flex align-items-center gap-2">
                {/* profilephoto */}
                <img
                  src={bioProfile?.profilePhoto}
                  alt=""
                  className="profile-img w-25"
                  style={{
                    borderRadius: "5rem",
                    height: "6rem",
                    background: "yellow",
                  }}
                />
                <div className="d-flex flex-column ">
                  <span className="">{bioProfile?.userName}</span>
                  <span className="">
                    {bioProfile?.followers?.length} followers
                  </span>
                </div>
              </div>
              <hr />
              {/* work section */}
              <div>
                <h4>Bio</h4>
                <p>{bioProfile?.bio}</p>
              </div>
              <hr />
              {/* work bio */}
              <div>
                <h4>Info</h4>
                <div className="d-flex align-items-center gap-2">
                  <img src={locationImg} alt="" />
                  <span>{bioProfile?.location}</span>
                </div>
                <div className="d-flex align-items-center mt-2 gap-2">
                  <img src={bagImg} alt="" />{" "}
                  <span>{bioProfile?.occupation}</span>
                </div>
              </div>
              <hr />
              {/* media bio */}
              <div>
                <h4>Socials</h4>
                <div className="d-flex align-items-center gap-2">
                  <img src={twitterImg} alt="" />
                  <span>{bioProfile?.x}</span>
                </div>
                <div className="d-flex align-items-center mt-2 gap-2">
                  <img src={linkedImg} alt="" />
                  <span>{bioProfile?.Linkedin}</span>
                </div>
              </div>
            </div>
          </section>

          {/* second section */}
          <section className="col-lg ">
            <h2>Single user</h2>
          </section>
        </div>
      </main>
    </>
  );
};

export default Bio;
