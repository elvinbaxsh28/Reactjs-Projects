import React, { useState } from 'react';
import Melumat from './Melumat';
import Edit from './Edit';
import Delete from './Delete';

const Card = ({ name, deleteUser, index, editUser}) => {

    const [hover, setHover] = useState(`url(/assets/img/user.png)`);
    const [item ,setItem] = React.useState(null);
    const [modalA, setModalA]= React.useState(false);
    const [modalE, setModalE]=React.useState(false)
    const [modalD, setModalD] = React.useState(false)



    const imgStyles = {
        backgroundImage: `${hover}`
    }
    //Add Modal
    const CloseModalA = () => {
        setModalA(false)
    }

    //Edit Modal
    const CloseModalE= () => {
        setModalE(false)
    }

    //Delete Modal
     const CloseModalD =() => {
         setModalD(false)

     }

    const updateTask = (name) => {
        editUser(name, index)
        setModalE(false)
    }

    // const DeleteUSer = (index) =>{
    //     deleteUser(index)
    // }
    

    
    return (
        <div className="card-group ">
            <div className="card"
                onMouseEnter={() => 
                    { setHover(` url(/assets/img/user_smile.png)`) }
                }
                onMouseLeave={() => 
                    { setHover(`url(/assets/img/user.png)`) }
                }
                >
                <div
                    className='item_'
                    style={imgStyles}
                >
                </div>
                <div className="card-body">
                    <h6 className="mt-1">  Name: {name.Name}</h6>
                    <h6 className="mt-3">  Surname: {name.Surname}</h6>
                    <div className="d-flex align-items-center justify-content-between">
                        <i 
                            className="btn far fa-file-alt " 
                            data-bs-toggle="tooltip" 
                            data-bs-placement="top" 
                            title="Məlumatlar"
                            style={{color: "#1BA333"}} 
                            onClick={() => setModalA(true) + setItem(name)}></i>
                        <i className="btn fas fa-edit" style={{color: "#E0DF07"}} onClick={()=> setModalE(true)}></i>
                        <i 
                            className="btn fas fa-trash-alt" 
                            style={{color: "red"}}
                            onClick={() => setModalD(true)}
                        ></i>
                    </div>
                    
                </div>
            </div>
            <Melumat name={name} modal={modalA} close={CloseModalA}/>
            <Edit name={name} modal={modalE} close={CloseModalE} deyisdir={updateTask}/>
            <Delete close={CloseModalD} modal={modalD} deleteUser={()=> deleteUser(index)} />
        </div>
    )
}

export default Card;


