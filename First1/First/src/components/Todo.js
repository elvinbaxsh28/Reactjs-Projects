// /** @format */
import React from "react";
import AddModal from "./AddModal";
import '../Css/General.css';
import user from '../assets/avatar.jpg';
import user2 from '../assets/hover.jpg';

const Todo = () => {
  const [modal, setModal] = React.useState(false);
  const [userList, setUserList] = React.useState([]);

  const [hover , setHover] = React.useState(user);


  React.useEffect(() => {
    let arr=localStorage.getItem("nameList")
    if(arr){
        let obj = JSON.parse(arr)
        setUserList(obj);
    }
},[])


  return (
    <div>
      <div className="d-flex justify-content-center">
      <button className="btn btn-success mt-1" onClick={() => setModal(true)}>
        Add
      </button>
      </div>
      <AddModal show={modal} setModal={setModal} data={userList} />
      
      <div className="row m-5 rounded general">
      {userList.map((item, key) => (
            <div className="col-3 p-3" key={key}>
            <img className="w-100" src={hover} 
               onMouseEnter={() => setHover(user)}
               onMouseLeave={() => setHover(user2)}  />
             
            <div className="cards rounded p-2" >
              <div className="names d-flex justify-content-between"> 
                <p className="m-0 fw-bold">Name:</p>
                <p>{item.name}</p>
              </div>

              <div className="names d-flex justify-content-between"> 
                <p className="m-0 fw-bold">Surname:</p>
                <p>{item.surname}</p>
              </div>

              <div className="names d-flex justify-content-between"> 
                <p className="m-0 fw-bold">Work:</p>
                <p>{item.work}</p>
              </div>
              <div className=" d-flex justify-content-between" style={{fontSize:"30px"}}> 
              <i class="bi bi-info-circle-fill text-warning"></i>
              <i class="bi bi-trash2-fill text-danger"></i>
              </div>

            </div>
        </div>
            ))}

        
          <div className="col-3">msm</div>
          <div className="col-3">bbbb</div>
    
      </div>

      {/* {userList.map((item, key) => (

        <div className="card" style={{width: "200px"}} key={key}>
          <div className="card-body">
            {item.name}
            <p className="m-0 p-0">
              {item.surname}
            </p>
            <p>
              {item.work}
            </p>
          </div>
          

        </div>


      ))} */}
     
      {/* {newArray.map((item, index) => 
          (
            <div key={index}>
              <div classNameName='d-flex'>
                <h1>{item.name}</h1>
                <h2>
                  {item.surname}
                </h2>
              </div>
            </div>
          )
        )} */}
    </div>
  );
};

export default Todo;
