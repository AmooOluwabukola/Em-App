import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.png";
import communityImg from "../assets/communitylogo.png";
import profileImg from "../assets/JoePic.png";
import Footer from "../components/FooterNavBag"

const FooterNav = () => {
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
  return (
    <>
      <div className="d-flex d-md-none d-lg-none justify-content-center mt-3 ">
        <section className="d-flex gap-5 px-5 py-2  align-items-center justify-content-center position-fixed bottom-0 bg-white">
          <Link to={"../"}>
            <div className="d-flex flex-column align-items-center">
              <img src={homeImg} alt="" />
            </div>
          </Link>
          <div className="d-flex flex-column align-items-center">
            <img src={communityImg} alt="" />
          </div>

          <div className="d-flex flex-column align-items-center  ">
          <div>
                <Footer/>
              </div>
            
            {/* <img src={profileImg} alt="" className="w-50 h-50" /> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default FooterNav;
