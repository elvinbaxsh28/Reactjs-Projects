import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Card from './Card';
//import Melumat from './Melumat';



const TodoList = () => {
   
    const [namelist, setNameList]= useState([])
    const [modal, setModal] = useState(false);


    useEffect(() => {
        let arr=localStorage.getItem("nameList")
        if(arr){
            let obj = JSON.parse(arr)
            setNameList(obj)
        }
    },[])

    // Add User
    const AddName = (name) =>{
        let newName=namelist
        newName.push(name)
        localStorage.setItem("nameList",JSON.stringify(newName))
        setNameList([...newName])
        setModal(false)

        // setTimeout(() => {}, 500);
    }

    // Delete User

    const Delete = (index) => {
        let deleteName=namelist;
        deleteName.splice(index,1)
        setNameList([...deleteName])
        localStorage.setItem("nameList", JSON.stringify(deleteName))
    }

    //Edit

    const Edit = (name, index) =>{
        let editName = namelist;
        editName[index] = name;
        console.log('test name', editName)
        setNameList([...editName])
        localStorage.setItem("nameList",JSON.stringify(editName))
    }

    const CloseModal = () =>{
        setModal(false)
    }

    return (
        <div>
            <div>
                <button className="btn btn-success  add-user" onClick={()=> setModal(true)}>Add user</button>
            </div>
                {/* <button className="btn btn-success  add-user" onClick={()=> setModal(true)}>Add user</button> */}
            <TodoForm AddName={AddName} modal={modal} close={CloseModal} />
            <div className="container mt-3">
                {namelist.map((name, i) => 
                    <Card 
                        name={name} 
                        key={i}  
                        deleteUser={Delete} 
                        index={i}
                        editUser={Edit}
                    />
                        
                    
                )}
            </div>
        </div>
    )
}



export default TodoList;
