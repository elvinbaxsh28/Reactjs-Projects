import React, {useState} from 'react'
import { Modal, CloseButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import user from "../img/user.png";


const AddModal = ({show, setModal, data}) => {
    const [text, setText] = useState("")
    const [name, setName] = useState("") 
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState("")
    const [team, setTeam] = useState("")
    const [searchTerm, setSearchTerm] = useState("");



  return (
    <Modal show={show}>
        {/* <Modal.Header>
            Add
            <CloseButton onClick={() => setModal(false)}/>
        </Modal.Header>
        <Modal.Body>
        
     <label className='text-danger fw-bold'>Name</label>
            <input  
                value={name}
                className='form-control ac'
                onChange={(e) => 
                    {
                        setName(e.target.value)
                    }
                    
                }
            />
            <label className='mt-2 fw-bold text-success'>Surname</label>
            <input  className='form-control'
                value={surname}
                onChange={(e) => 
                    setSurname(e.target.value)
                }
            />
          
            
            <button 
                className='btn w-100 btn-primary mt-2'
                onClick={(e) => 
                    {
                        if(text && name && surname && age && team) {
                            data.push(
                                {
                                    // text: text,
                                    name: name,
                                    surname: surname
                                    // age: age,
                                    // team: team
                                }
        
                            )
                            localStorage.setItem("nameList",JSON.stringify(data))
                            setModal(false)
                            setText("")
                            setName("")
                            setSurname("")
                            setAge("")
                            setTeam("")



                            
                        }else {
                            alert("There is no info")
                        }
                        
                    }   

                    
                }
                > Add</button>
        </Modal.Body> */}

<div className='inputContainer'>
        <input className='search' type="text" placeholder="Enter player name.."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
      <button 
                className='btn w-100 btn-danger mt-2'
                onClick={(e) => 
                    {
                        if(text && name && surname && age && team) {
                            data.push(
                                {
                                    // text: text,
                                    name: name,
                                    surname: surname
                                    // age: age,
                                    // team: team
                                }
        
                            )
                            localStorage.setItem("nameList",JSON.stringify(data))
                            setModal(false)
                            setText("")
                            setName("")
                            setSurname("")
                            setAge("")
                            setTeam("")



                            
                        }else {
                            alert("There is no info")
                        }
                        
                    }   

                    
                }
                > Add</button>
    </Modal>
  )
}

export default AddModal












{/* <Card style={{ width: '30rem'  }} > 
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
       
    </Card>  */}
    {/* <label className='mt-2 fw-bold text-success'>Text</label>
            <input  className='form-control'
                value={text}
                onChange={(e) => 
                    setText(e.target.value)
                }
            /> */}





{/* <label className='mt-2 fw-bold text-success'>Age</label>
            <input  className='form-control'
                value={age}
                onChange={(e) => 
                    setAge(e.target.value)
                }
            />
            <label className='mt-2 fw-bold text-success'>Team</label>
            <input  className='form-control'
                value={team}
                onChange={(e) => 
                setTeam(e.target.value)
                }
            /> */}