import './App.css';
import React,{useState , useEffect} from 'react';
import axios from 'axios';
//https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json
function App() {

  const [value , setValue] = useState();
  const [date , setDate] = useState("");
 
  useEffect(()=>{
  
   axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
   .then(response => setValue(response.data[date]))
   //.catch(err=console.log(err))
 
  },[value,date])

//14/03/2020 date bu sekilde search-aat isdiyecek

  return (
    <div className="App">
    <div className='container'>
      <div className='row'>
        <div className='col-6-md mx-auto mt-4' >
          <h1 className='text-center text-info display-1'>Covid-19 Search</h1>
          <input type="text" placeholder="GG/AA/YY" className="form-control"
           onChange={(event)=>(setDate(event.target.value))}></input>
          <table className="table table-striped text-white">
  <thead>
    <tr className='text-black'>
      <th scope="col">Tarix</th>
      <th scope="col">Test</th>
      <th scope="col">Xeste</th>
      <th scope="col">Ölüm</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <th className='text-danger' scope="row">{value === undefined ? "Loading..." : value.date}</th>
      <td className={value === undefined ? "bg-danger" : "bg-success"}>{value === undefined ? "Loading..." : value.totalTests}</td>
      <td className={value === undefined ? "bg-danger" : "bg-success"}>{value === undefined ? "Loading..." : value.totalPatients}</td>
      <td className={value === undefined ? "bg-danger" : "bg-success"}>{value === undefined ? "Loading..." : value.totalDeaths}</td>
    </tr>
  
  </tbody>
</table>

        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
