import React ,{useState, useEffect}from 'react'
import locationImg from "../assets/location.svg"
import bagImg from "../assets/briefcase.svg"
import twitterImg from "../assets/twitter.svg"
import linkedImg from "../assets/linkedin.svg"
const Bio = () => {
    const [bioProfile,setBioProfile] = useState([]);

   // const bioProfile = 
  const token = localStorage.getItem("clientToken")
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
     <section className="rounded-2 col-lg-4  border  bg-white ">
                {/* john img */}

                <div className="joeBio d-none d-lg-block mt-2">
                  <div className="d-flex align-items-center gap-2">
                    {/* profilephoto */}
                    <img src={bioProfile?.profilePhoto} alt="" className="profile-img w-25" style={{borderRadius:"5rem", height:"6rem", background:"yellow"}} />
                    <div className="d-flex flex-column ">
                      <span className="">{bioProfile?.userName}</span>
                      <span className="">{bioProfile?.followers?.length} followers</span>
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
                      <img src={ locationImg } alt="" />
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
    </>
  )
}

export default Bio