import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import { Link } from "react-router-dom";
import locationImg from "../assets/location.svg";
import bagImg from "../assets/briefcase.svg";
import twitterImg from "../assets/twitter.svg";
import linkedImg from "../assets/linkedin.svg";
// import Bio from "../components/Bio"
const Community = () => {

    const [bioProfile,setBioProfile] = useState([]);

    const [data, setData] = useState([]);
    const getUsers= async () =>{
        const request = await fetch("https://em-server-3xek.onrender.com//api/v1/users/all");
        const response = await request.json();
        console.log(response.users);
        setData(response.users)
    }
    useEffect(()=>{
        getUsers()
    },[])

    const getBioProfile = async ()=>{
        try {
          const request = await fetch("http://localhost:5780/api/v1/users",{
            headers:{
              "Content-type":"application/json",
              Authorization:`Bearer ${token}`
            }
          })
          const response = await request.json();
          console.log(response.user);
          setBioProfile(response.user)
          
        } catch (error) {
          console.log(error.message);
        }
      }
    
      
    
      
      useEffect(() => {
        // document.title = "Home | Page";
        
        getBioProfile()
      },[]);
  return (
    <>
    <Navbar/>
    <main className="container">
 <div className="row gap-2 pt-3">
 <h1> {data?.userName} </h1>
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

    <div className="col-lg">
       {/* <h2>community for all users</h2> */}
       <div>
              {data && data.length >= 1 ? (
                <>
                  {data?.map((datum) => {
                    const { profilePhoto, followers, userName, _id } = datum;
                    return (
                      <div
                        key={_id}
                        className="d-flex justify-content-between border mb-3 align-items-center p-4"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={profilePhoto}
                            alt=""
                            className="profile-img"
                            style={{
                              borderRadius: "5rem",
                              height: "4rem",
                              width: "5rem",
                            }}
                          />
                          <div className="d-flex flex-column ">
                            <Link className="text-decoration-none" to ={`/singleuserprofile/${_id}`}>
                            <span > {userName} </span>
                            </Link>
                           
                            <span className="">
                              {followers?.length} follower
                            </span>
                          </div>
                        </div>
                        <div>
                          <button className="btn rounded-5 border">
                            follows +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <h2>No users yet</h2>
                </>
              )}
            </div>
    </div>

 </div>
    </main>
   
     
    </>
   
  )
}

export default Community