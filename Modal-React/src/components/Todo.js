/** @format */

import React, { useState, useEffect} from "react";
import AddModal from "./AddModal";
import "../Css/General.css";
import user from "../img/user1.png";
//import user_smile from "../img/user_smile.png";
import InfoModal from "./InfoModal";
import Swal from 'sweetalert2'


const Todo = () => {
  const [modal, setModal] = useState(false);
  const [userList, setUserList] = useState([]);

  // Info state
  const [info_modal, setInfo_modal] = useState(false)
  const [info, setInfo] = React.useState({})
  const [info_index, setInfo_index] = useState()



  useEffect(() => {
    let arr = localStorage.getItem("nameList");
    if (arr) {
      let obj = JSON.parse(arr);
      setUserList(obj);
    }
  }, []);

  const Delete = (key) => {
    let deleteList = userList
    deleteList.splice(key, 1)

    setUserList([...deleteList])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Delete',
      showConfirmButton: false,
      timer: 1500
    })
    localStorage.setItem("nameList", JSON.stringify(deleteList))
  }




  return (
    <div>
      <div className="d-flex justify-content-right">
        <button className="btn btn-danger mt-2 m-2" onClick={() => setModal(true)}>
          Search
        </button>
      </div>

      <AddModal show={modal} setModal={setModal} data={userList} />
      <InfoModal 
        show={info_modal} 
        setInfo_modal = {setInfo_modal} 
        info = {info} 
        userList={userList} 
        setUserList = {setUserList}
        index={info_index}
        />

      <div className="row  m-5 rounded general">
        {userList.map((item, key) => (
          <div
            className="col-3 p-3"
            key={key}
            
            >
            <img
              className="w-100"
              alt="Sekil yoxdur"
              src={ user}
            />
            
            <div className="cards rounded p-2">
            
              <div className="names d-flex justify-content-between">
                <p className="m-0 fw-bold">Name:</p>
                <p>{item.name}</p>
              </div>
              <div className="names d-flex justify-content-between">
                <p className="m-0 fw-bold">Surname:</p>
                <p>{item.surname}</p>
              </div>
              <div className="names d-flex justify-content-between">
                <p className="m-0 fw-bold">Age:</p>
                <p>{item.age}</p>
              </div>
              <div className="names d-flex justify-content-between">
                <p className="m-0 fw-bold">Team:</p>
                <p>{item.team}</p>
              </div>
              <div className="names d-flex justify-content-between">
                <p className="m-0 fw-bold">Text:</p>
                <p>{item.text}</p>
              </div>
              <div className="d-flex justify-content-between">
                <button 
                  className="btn btn-primary"
                  onClick={() => 
                    {
                      setInfo_modal(true)
                      setInfo(item)
                      setInfo_index(key)
                    }
                  
                  }
                  >
                  <i className="bi bi-info"></i>
                </button>
                <button className="btn btn-danger" onClick={() => Delete(key)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
