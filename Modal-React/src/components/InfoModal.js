/** @format */

import React, {useState, useEffect} from 'react'
import { Modal, CloseButton } from "react-bootstrap";
import { ListGroup, Card } from 'react-bootstrap';
import user from "../img/user1.png";


const InfoModal = ({ show, setInfo_modal, info, userList, setUserList, index }) => {
    const [text, setText] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState("")
    const [team, setTeam] = useState("")


    useEffect(() => {
    setText(info.text);
    setName(info.name);
    setSurname(info.surname);
    setAge(info.age);
    setTeam(info.team);

  }, [show]);




  const Edit = () => {
    let updateList = userList
    updateList[index] = {
      text:text,
      name: name,
      surname: surname,
      age:age,
      team: team
    }
    setUserList([...updateList])
    localStorage.setItem("nameList", JSON.stringify(updateList))
    setInfo_modal(false)
  }


  return (
    <Modal show={show} onHide={() => setInfo_modal(false)}>
      <Modal.Header>
        Info
        <CloseButton onClick={() => setInfo_modal(false)} />
      </Modal.Header>
      <Modal.Body>
      <Card style={{ width: '30rem'  }} > 
      <Card.Img variant="top" src={user} /> 
      <Card.Body> 
        <Card.Text value={text}
                   onChange={(e) => setText(e.target.value)}> 
         
        </Card.Text> 
        <Card.Title >Football Player</Card.Title> 
      </Card.Body> 
      <ListGroup className="list-group-flush"> 
        <ListGroup.Item value={name}
                        onChange={(e) => setName(e.target.value)}></ListGroup.Item> 

        <ListGroup.Item value={surname}
                        onChange={(e) => setSurname(e.target.value)}></ListGroup.Item> 

        <ListGroup.Item value={age}
                        onChange={(e) => setAge(e.target.value)}></ListGroup.Item> 

        <ListGroup.Item value={team}
                        onChange={(e) => setTeam(e.target.value)}></ListGroup.Item> 
      </ListGroup> 
       
    </Card> 
        <button className="btn w-100 btn-primary mt-2" onClick={Edit}>Edit</button>
      </Modal.Body>
    </Modal>
  );
};

export default InfoModal;
