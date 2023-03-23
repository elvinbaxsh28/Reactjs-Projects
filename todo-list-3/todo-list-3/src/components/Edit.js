import React, {useEffect} from 'react'
import { Modal, CloseButton} from 'react-bootstrap';


const Edit = ({ name, modal, close, deyisdir}) => {

    const [name1, setName1] = React.useState("");
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
            setName1(value)
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

    useEffect(() => {
        setName1(name.Name);
        setSurname(name.Surname);
        setAge(name.Age);
        setGender(name.Gender);
        setWork(name.Work);
        setSalary(name.Salary);
        setDescription(name.Description);
    },[])

    const EditUser = (e) =>{
        e.preventDefault();
        let updateName = {};
        updateName["Name"] = name1;
        updateName["Surname"] = surname;
        updateName["Age"]= age;
        updateName["Gender"]= gender;
        updateName["Work"]= work;
        updateName["Salary"]= salary;
        updateName["Description"]= description;
        console.log(updateName)
        deyisdir(updateName)
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
                            value={name1}
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
                    <button className="btn btn-primary my-3 form-control" form="add-form" onClick={EditUser}>Add</button>
                </div>
            </form>
        </Modal.Body>
    </Modal>
    )
}

export default Edit
