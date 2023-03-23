import React from 'react';
import { Modal, CloseButton } from 'react-bootstrap';


const TodoForm = ({ AddName, modal, close }) => {

    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [age, setAge] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [work,setWork] = React.useState("");
    const [salary, setSalary]=React.useState("")
    const [description, setDescription]=React.useState("");




    const handleChange = (e) => {
        // setName(e.target.value)
        const { name, value } = e.target

        if (name === "NameV") {
            setName(value)
        } else if(name === "DescriptiondV") {
            setDescription(value)
        } else if (name === "AgeV"){
            setAge(value)
        }else if (name === "GenderV") {
            setGender(value)
        } else if (name === "WorkV") {
            setWork(value)
        } else if (name === "SalaryV") {
            setSalary(value)
        }
        else {
            setSurname(value)
        }
    }

    const save = (e) => {
        e.preventDefault();
        if (name === '') {
            alert("Ad daxil edin")
        } else if ( surname === ''){
            alert("Soy ad daxil edin")
        }else if ( age === ''){
            alert("Yas daxil edin")
        }else if ( work === ''){
            alert("Is daxil edin")
        }else if ( gender === ''){
            alert("Cins daxil edin")
        }else if ( salary === ''){
            alert("Maas ad daxil edin")
        } else {
            let savename = {};
            savename["Name"] = name;
            savename["Surname"] = surname;
            savename["Age"]=age;
            savename["Gender"]=gender;
            savename["Work"]=work;
            savename["Salary"]=salary;
            savename["Description"]=description;
            AddName(savename);
        }
         setName("");
         setSurname("");
         setAge("");
         setGender("");
         setSalary("");
         setWork("")
         setDescription("")
        
    }



    return (
        <Modal show={modal}  onHide={close} >
            <Modal.Header >
                Add User
                <CloseButton onClick={close} />
            </Modal.Header>
            <Modal.Body>
                <form id="add-form">
                    <div className="form-group">
                        <div className = "input-group input-group-default mt-2">
                            <span className="input-group-text " id="inputGroup-sizing-default">
                                <i className="fas fa-file-signature" style={{color: "#4B67F9 "}}></i>
                            </span>
                            <input
                                //boostrap
                                className="form-control "
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"
                                type="text"
                                placeholder="Add your Name"
                                onChange={handleChange}
                                name="NameV"
                                value={name}
                            />
                        </div>
                        <div className = "input-group input-group-default mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">
                                <i className="fas fa-file-signature" style={{color: "#4B67F9 "}}></i>
                            </span>
                            <input
                                //boostrap
                                className="form-control"
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"

                                type="text"
                                placeholder="Add your Surname"
                                onChange={handleChange}
                                name="SurnameV"
                                value={surname}
                            />
                        </div>
                       
                        <div className="d-flex justify-content-between">
                            {/* age */}
                            <div className = "input-group input-group-default mt-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <i className="fas fa-sort-numeric-up" style={{color: "#4B67F9 "}}></i>
                                </span>
                                <input
                                    //boostrap
                                    className="form-control"
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-default"

                                    type="number"
                                    placeholder="Add your Age"
                                    onChange={handleChange}
                                    name="AgeV"
                                    value={age}
                                />
                            </div>
                            {/* gender */}
                            <div className = "input-group input-group-default mt-3 ms-2">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <i className="fas fa-venus-mars" style={{color: "#4B67F9 "}}></i>
                                </span>
                                <input
                                    //boostrap
                                    className="form-control"
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-default"

                                    type="text"
                                    placeholder="Add your Gender"
                                    onChange={handleChange}
                                    name="GenderV"
                                    value={gender}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            {/* work */}
                            <div className = "input-group input-group-default mt-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <i className="fas fa-briefcase" style={{color: "#4B67F9 "}}></i>
                                </span>
                                <input
                                    //boostrap
                                    className="form-control"
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-default"

                                    type="text"
                                    placeholder="Add your Work"
                                    onChange={handleChange}
                                    name="WorkV"
                                    value={work}
                                />
                            </div>
                            {/* salary */}
                            <div className = "input-group input-group-default mt-3 ms-2 ">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <i className="fas fa-dollar-sign" style={{color: "#4B67F9 "}}></i>
                                </span>
                                <input
                                    //boostrap
                                    className="form-control"
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-default"

                                    type="text"
                                    placeholder="Add your Salary"
                                    onChange={handleChange}
                                    name="SalaryV"
                                    value={salary}
                                />
                            </div>
                        </div>
                        <div className = "input-group input-group-default mt-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">
                                <i className="fas fa-file-prescription" style={{color: "#4B67F9 "}}></i>
                            </span>
                            <input
                                //boostrap
                                className="form-control"
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"

                                type="text"
                                placeholder="Add your Description"
                                onChange={handleChange}
                                name="DescriptiondV"
                                value={description}
                            />
                        </div>
                        <button className="btn btn-primary my-3 form-control" form="add-form" onClick={save}>Add</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>



    )
}

export default TodoForm;