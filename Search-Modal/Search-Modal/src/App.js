import React, { useState } from "react";
import './App.css';
import Data from './Data.json';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);

  return (

    <>
    
    

      <Button variant="primary" onClick={handleShow}>
        Search Football Player
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='inputContainer'>
        <input className='search' type="text" placeholder="Enter player name..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
      
        </Modal.Body>
        
      </Modal>
      <div className='container'>
      <div className='dataContainer'>
        {
          Data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val;
              }
            }).map((val) => {
              return (
                <div className="data" key={val.id}>

                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p>{val.Description}</p>

                </div>
              )
            })
        }
      </div>
    
      <h1>Football and Choaching</h1>
      
      
    
      
    </div>
    </>
  );
}

export default App;
