/** @format */

import React from "react";
import { Modal, CloseButton } from "react-bootstrap";

const InfoModal = ({ show, setInfo_modal, info, userList, setUserList, index }) => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [work, setWork] = React.useState("");



  React.useEffect(() => {
    setName(info.name);
    setSurname(info.surname);
    setWork(info.work);
  }, [show]);




  const Edit = () => {
    let editList = userList
    editList[index] = {
      name: name,
      surname: surname,
      work: work
    }
    setUserList([...editList])
    localStorage.setItem("nameList", JSON.stringify(editList))
    setInfo_modal(false)
  }


  return (
    <Modal show={show} onHide={() => setInfo_modal(false)}>
      <Modal.Header>
        Info
        <CloseButton onClick={() => setInfo_modal(false)} />
      </Modal.Header>
      <Modal.Body>
        <label className="text-danger fw-bold">Name</label>
        <input
          className="form-control ac"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="mt-2 text-warning fw-bold">Surname</label>
        <input
          className="form-control"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <label className="mt-2 fw-bold text-success">Work</label>
        <input
          className="form-control"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <button className="btn w-100 btn-primary mt-2" onClick={Edit}>Edit</button>
      </Modal.Body>
    </Modal>
  );
};

export default InfoModal;
