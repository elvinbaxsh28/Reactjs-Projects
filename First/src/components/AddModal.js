import React from 'react'
import { Modal, CloseButton } from 'react-bootstrap';


const AddModal = ({show, setModal, data}) => {

    const [name, setName] = React.useState("")
    const [surname, setSurname] = React.useState("")
    const [work, setWork] = React.useState("")



  return (
    <Modal show={show}>
        <Modal.Header>
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
                        // console.log(e.target)
                    }
                    
                }
            />
            <label className='mt-2 text-warning fw-bold'>Surname</label>
            <input  className='form-control' 
                value={surname}
                onChange={(e) => 
                    setSurname(e.target.value)
                }
                />
            <label className='mt-2 fw-bold text-success'>Work</label>
            <input  className='form-control'
                value={work}
                onChange={(e) => 
                    setWork(e.target.value)
                }
            />
            <button 
                className='btn w-100 btn-primary mt-2'
                onClick={(e) => 
                    {
                        if(name && surname && work) {
                            data.push(
                                {
                                    name: name,
                                    surname: surname,
                                    work: work
                                }
        
                            )
                            localStorage.setItem("nameList",JSON.stringify(data))
                            setModal(false)
                            setName("")
                            setSurname("")
                            setWork("")
                        }else {
                            alert("Melumat tapilmadi")
                        }
                        
                    }   

                    
                }
                > Add</button>
        </Modal.Body>
    </Modal>
  )
}

export default AddModal