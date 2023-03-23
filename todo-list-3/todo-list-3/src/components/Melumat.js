import React from 'react';
import { Modal, CloseButton, Button } from 'react-bootstrap';

const Melumat = ({ name, modal, close }) => {

    // const [name1, setName1] = React.useState("");
    // const [surname, setSurname] = React.useState("");
    // const [age, setAge] = React.useState("");
    // const [gender, setGender] = React.useState("");
    // const [work,setWork] = React.useState("");
    // const [salary, setSalary]=React.useState("")
    // const [description, setDescription]=React.useState("");

    // useEffect(() => {
    //     setName1(name.Name);
    //     setSurname(name.Surname);
    //     setAge(name.Age);
    //     setGender(name.Gender);
    //     setWork(name.Work);
    //     setSalary(name.Salary);
    //     setDescription(name.Description);
    // },[]}

    

    return (
        <div>
            <Modal show={modal} onHide={close}>
                <Modal.Header>
                    <Modal.Title>İstifadəçi məlumatları</Modal.Title>
                    <CloseButton onClick={close}/>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="mt-1" >Name: {name.Name}</h6>
                    <h6 className="mt-3" >Surname: {name.Surname}</h6>
                    <div  className="d-flex justify-content-between">
                        <h6>Age : {name.Age}</h6>
                        <h6>Gender: {name.Gender}</h6>
                    </div>
                    <div  className="d-flex justify-content-between">
                        <h6>Work: {name.Work}</h6>
                        <h6>Salary: {name.Salary}</h6>
                    </div>
                    <h6>Description: {name.Description}</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Melumat
