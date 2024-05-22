import notifiImg from "../assets/notificationIcon.png";
import logOutImg from "../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
import EditImg from "../assets/edit-2.png";
import { useState } from "react";



const NavBag = () => {
  const [modalShow, setModalShow] = useState(false);

  const [showModal, setShowModal] =useState(false);
  const handleImageClick =()=>{
      setShowModal(true);
  };
  const handleCloseModal = ()=>{
      setShowModal(false);
  };

  const navigate =useNavigate()
  const logOut = ()=>{
    localStorage.removeItem("clientToken")
    navigate("/signin")
  }
  return (
    <>
      <>
     

      <EditProfile
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    {/* above for d test */}
      <section className="bg-white rounded-2 border p-3 mt-3  position-relative z-1">
        {/* Edit */}
        <div className="mb-4">
          <div role="button" className="d-flex gap-2 align-items-center first-div justify-content-start">
            <img src={EditImg} alt="" onClick={() => setModalShow(true)} role="button"/>
            <span  className="fw-lighter" >
              Edit Profile
            </span>
           
          </div>
          <hr />
        </div>
     
        {/* Notification */}
        <div className="mb-4">
          <div className="d-flex gap-2 align-items-center first-div justify-content-start">
            <Link to="#">
              <img src={notifiImg} alt="" />
            </Link>
            <span className="fw-lighter">Notifications</span>
          </div>
          <hr />
        </div>

        {/* Logout */}
        <div>
          <div className="d-flex gap-2 align-items-center first-div justify-content-start ">
            <Link to="../SignIn">
              <img src={logOutImg} alt="" />
            </Link>
            <span className="fw-lighter" onClick={logOut} role="button">Log Out</span>
          </div>
         
          <hr />
        </div>
      </section>
    </>
  );
};


export default NavBag;

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

