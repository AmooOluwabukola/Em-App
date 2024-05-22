import React,{useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import addImg from "../assets/addImg.svg";
import twitterImg from "../assets/twitter2.svg";
import linkedImg from "../assets/linkedin2.svg";
import occupation from "../assets/occupation.svg";
import gender from "../assets/gender.svg";
import age from "../assets/ageImg.svg";
import bioImg from "../assets/bioImg.svg";
import locationImg from "../assets/location2.svg";
import "../styles/Edit.css";
import Form from "react-bootstrap/Form";
// import Bio from "./Bio";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function EditProfile(props) {
  const [bioProfile, setBioProfile] = useState([]);
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [x, setX] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [selectedFile,setSelectedFile]=useState(null);
  const [preview, setPreview]=useState(addImg);


  const handleFileChange=(event)=>{
    const file =event.target.files[0]
    setSelectedFile(file);

    const reader =new FileReader();
    reader.onloadend =()=>{
      setPreview(reader.result)
    };
    if(file){
      reader.readAsDataURL(file)
    }
  }

// handle submit
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("bio", bio);
    formData.append("age", age);
    formData.append("location", location);
    formData.append("gender", gender);
    formData.append("occupation", occupation);
    formData.append("x", x);
    formData.append("linkedIn", linkedIn);
    if (selectedFile) {
      formData.append("profilePhoto", selectedFile);
    }
    try {
      const response =await fetch("http://localhost:5780/api/v1/users/update-profile",{
        method:"PATCH",
        body:formData,
        headers:{
          Authorization:`Bearer ${token}`
        },
      });
      const result =await response.json();
      console.log(result);
      if (result){
        
        toast.success(result.message)
      }
    } catch (error) {
      console.error("Error updating profile:", error)
    }
  }
  const token = localStorage.getItem("clientToken");
  const navigate =useNavigate();
const getBioProfile =async()=>{
  try {
    const request =await fetch("http://localhost:5780/api/v1/users",{
      headers:{
        "Content-type":"application/json",
        Authorization:`Bearer ${token}`
      }
    })
    const response = await request.json();
    setBioProfile(response.user);
    setBio(response.user.bio)
    setLocation(response.user.location)
    setOccupation(response.user.occupation)
    setX(response.user.x);
    setLinkedIn(response.user.linkedIn);
    setAge(response.user.age ||"");
    setGender(response.user.gender ||"");
    setPreview(response.user.profilePhoto || addImg);
  } catch (error) {
    console.log(error.message);
  }
};

// const handleSubmit =async ()=>{
//   const formData = new FormData();
// }
useEffect(()=>{
  if(!token){
    toast.error("unauthorized, sign in");
    navigate("/signin")
  }
  getBioProfile()
},[])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       
      </Modal.Header>
      <Modal.Body>
         <div >
                <Form className=" row"  encType="multipart/form-data" onSubmit={handleSubmit}>
                 {/* first section */}
                <div className="col-6">
                <span>
                  <strong>Hi,</strong>
                </span>{" "}
                <span className="text-primary">
                  <strong>John Doe</strong>
                </span>
                <h5>Complete Your Profile</h5>
                <img src={preview} alt="add image" className="w-100 rounded-pill mb-4" />
                <Form.Group controlId="formFileSm" className="mb-3 custom-file-input  ">
                  <Form.Control type="file" size="sm" className="file-control" onChange={handleFileChange} />
                </Form.Group>
              </div>
                 
                 {/* second section */}
                  <div className="col-4 mt-5   ">
                  <h6>Basic Information</h6>
                  {/* bio */}
                  <Form.Group
                    controlId="floatingTextarea2"
                    className="mb-2 position-relative"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Bio"
                      className="bg-light ps-5"
                      style={{
                        height: "100px",
                        width: "350px",
                       
                      }}
                      value={bio}
                      onChange={(e)=>setBio(e.target.value)}
                    />
                    <div className="position-absolute top-0 translate-middle- p-2">
                      <img src={bioImg} alt="" className="mb-2" />
                    </div>
                  </Form.Group>

                  {/* age and gender div */}
                  <div className="d-flex ">
                    {/* age */}
                    <Form.Group className=" position-relative" controlId="">
                      <Form.Control
                        type="text"
                        placeholder="Age"
                        className="bg-light ps-5"
                        style={{
                          width: "150px",
                          marginRight: "0.5rem",
                        }}
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                      />

                      <div className="position-absolute top-0 translate-middle- p-2">
                        <img src={age} alt="" className="mb-2" />
                      </div>
                    </Form.Group>

                    {/* gender*/}
                    <Form.Group
                      className="mb-1 position-relative"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Gender"
                        className="lock ps-5  bg-light"
                        style={{
                          width: "190px",
                        }}
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                      />
                      <div className="position-absolute top-0 translate-middle- p-2">
                        <img src={gender} alt="" className="mb-2" />
                      </div>
                    </Form.Group>
                  </div>

                  {/* location */}
                  <Form.Group className="mb-1 position-relative" controlId="">
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      className="bg-light ps-5"
                      style={{
                        width: "350px",
                      }}
                      value={location}
                      onChange={(e)=>setLocation(e.target.value)}
                    />

                    <div className="position-absolute top-0 translate-middle- p-2">
                      <img src={locationImg} alt="" className="mb-2" />
                    </div>
                  </Form.Group>

                  {/* occupation */}

                  <Form.Group className="mb-1 position-relative" controlId="">
                    <Form.Control
                      type="text"
                      placeholder="Occupation"
                      className="bg-light ps-5"
                      style={{
                        width: "350px",
                      }}
                      value={occupation}
                      onChange={(e)=>setOccupation(e.target.value)}
                    />

                    <div className="position-absolute top-0 translate-middle- p-2">
                      <img src={occupation} alt="" className="mb-2" />
                    </div>
                  </Form.Group>

                  {/* socials */}
                  <h6 className="mt-2">Socials</h6>

                  {/* twitter */}
                  <Form.Group className="mb-1 position-relative" controlId="">
                    <Form.Control
                      type="text"
                      placeholder="X App"
                      className="bg-light ps-5"
                      style={{
                        width: "350px",
                      }}
                      value={x}
                      onChange={(e)=>setX(e.target.value)}
                    />

                    <div className="position-absolute top-0 translate-middle- p-2">
                      <img src={twitterImg} alt="" className="mb-2 " />
                    </div>
                  </Form.Group>
                  {/* linkedIn */}
                  <Form.Group className="mb-1 position-relative" controlId="">
                    <Form.Control
                      type="text"
                      placeholder="LinkedIn"
                      className="bg-light ps-5"
                      style={{
                        width: "350px",
                      }}
                      value={linkedIn}
                      onChange={(e)=>setLinkedIn(e.target.value)}
                    />

                    <div className="position-absolute top-0 translate-middle- p-2">
                      <img src={linkedImg} alt="" className="mb-2 " />
                    </div>
                  </Form.Group>
              
                <Button
                  style={{
                    width: "350px",
                  }}
                  className="rounded-pill mt-3"
                  type="submit"
                >
                  Continue
                </Button>
                </div>
                </Form>
             
            </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfile;