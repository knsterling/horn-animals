import React from 'react';
import{Button, Modal, Image}from 'react-bootstrap';
function SelectedBeasts({modalOpen, setModalOpen, img_url}){
  return(
    <>
      <Button onClick={() => setModalOpen(!modalOpen)}   className="bg-primary border-0">
          modal button
      </Button>
      <Modal show={modalOpen} onHide={() => setModalOpen (!modalOpen)}>
        
        <Modal.Body>
          <Image
            src={img_url}
            className="img-fluid"
          />

        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={()=> setModalOpen(!modalOpen)}  variant="primary">
                Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SelectedBeasts;
