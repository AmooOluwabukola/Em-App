import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import "../styles/Home.css";
import johnImg from "../assets/joeImg.svg";

import photoImg from "../assets/gallery.svg";
import { Link } from "react-router-dom";
import { people } from "../Db";
import loveImg from "../assets/heart (1).svg";
import loveRed from "../assets/heart.svg";
import commentImg from "../assets/messages-2.svg";
import shareImg from "../assets/send-2.svg";
import FooterNav from "../components/FooterNav";
import JoeOff from "../components/JoeOff";
import PostModal from "../components/PostModal";
import Bio from "../components/Bio"
const Home = () => {
  console.log(people);
  const [showModal, setShowModal] = useState(false);
  const handleImageClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // const navigate = useNavigate()

  const [bioProfile, setBioProfile] = useState([]);
  const token = localStorage.getItem("clientToken");
  const getBioProfile = async () => {
    try {
      const request = await fetch("http://localhost:5780/api/v1/users", {
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
      <Navbar />
      {/* john section */}
      <div className="bg-light">
        <div className="container position-sticky  ">
          <div>
            <main className=" row main-parent gap-2 pt-3">

              {/* first section */}
              <Bio/>

              {/* second section for input */}
              <section className="col-lg ">
                <div className="p-2 post-section rounded-2 border bg-white">
                  <div className="d-flex gap-2 align-items-center">
                    <div className="d-lg-none">
                      <JoeOff />
                    </div>

                    <img src={bioProfile?.profilePhoto} alt="" className="d-none d-lg-block border rounded-pill" style={{width:"50px"}} />
                    <input
                      type="text"
                      className="rounded-pill ps-3 post-input w-100"
                      placeholder="What do you want to ask or share"
                    />
                  </div>

                  {/* img */}
                  <div className="d-flex align-items-center justify-content-between mt-2 ">
                    <div className="d-flex gap-2 align-items-center">
                      <img src={photoImg} alt="" onClick={handleImageClick} />{" "}
                      <PostModal
                        show={showModal}
                        handleClose={handleCloseModal}
                      />
                      <span>Image</span>
                    </div>

                    <button className="btn btn-sm  btn-primary text-light px-4 rounded-pill">
                      {" "}
                      post
                    </button>
                  </div>
                </div>
                {/* posts */}
                <div className="mt-3 mb-5  bg-white">
                  {people.map((person) => {
                    const {
                      id,
                      name,
                      time,
                      post,
                      profileImg,
                      postImg,
                      follow,
                    } = person;
                    return (
                      <div
                        key={id}
                        className="p-2  border rounded-2 scroll-page "
                      >
                        {/* top div */}
                        <div className="d-flex justify-content-between align-items-center ">
                          {/* img and time */}
                          <div className="d-flex gap-2 align-items-center">
                            <Link to={"../FriendProfile"}>
                              <img src={profileImg} alt="" className="" />
                            </Link>
                            <span className="d-flex flex-column justify-content-center ">
                              <Link
                                to={"../FriendProfile"}
                                className="text-decoration-none"
                              >
                                <h5 className="pt-3">{name}</h5>
                              </Link>
                              <p>{time}</p>
                            </span>
                          </div>

                          {/* btn-div */}
                          <div>
                            <button className="btn btn-white btn-sm rounded-pill border px-4">
                              {follow}
                            </button>
                          </div>
                        </div>

                        {/* post */}
                        <p>{post}</p>

                        {/* post-img */}
                        <img src={postImg} className="w-100" alt="" />

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
      <FooterNav />
    </>
  );
};

export default Home;
