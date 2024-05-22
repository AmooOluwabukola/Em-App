import React,  {useState} from 'react'
import { Modal, Button, ModalBody } from 'react-bootstrap'
import railway from "../assets/railway.svg"
import WaterView from "../assets/waterview.svg"
import Plates from "../assets/plates.svg"
import Form from "react-bootstrap/Form";
import CloseCircle from "../assets/close-circle.svg"
const PostModal = ({show, handleClose}) => {
   
  return (
    <div>
       <Modal show= {show} onHide={handleClose}  size="lg"  backdrop="static"
        keyboard={false}>
         <Modal.Header closeButton></Modal.Header>
         <Modal.Body closeButton>
            <Form>
            <Form.Group
                    controlId="floatingTextarea2"
                    className="mb-3 "
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Write Post"
                      className="bg-light "
                      style={{
                        height: "200px",
                        width: "100%",
                      }}
                    />
                   
                  </Form.Group>
            </Form>
         <div className="d-flex gap-2">
            <div className="position-relative">
                <img src={railway} alt="" className='w-100' />
                <div className="position-absolute top-0 end-0">
                    <img src={CloseCircle} alt="" />
                </div>
            </div>
            <div className="position-relative">
                <img src={WaterView} alt="" className='w-100'/>
                <div className="position-absolute top-0 end-0">
                    <img src={CloseCircle} alt="" />
                </div>
            </div>
            <div className="position-relative">
                <img src={Plates} alt=""  className='w-100'/>
                <div className="position-absolute top-0 end-0">
                    <img src={CloseCircle} alt="" />
                </div>
            </div>
         </div>
         </Modal.Body>
         <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose} className='w-25 rounded-pill'>
          Post
          </Button>
        </Modal.Footer>
       </Modal>
    </div>
  )
}

export default PostModal