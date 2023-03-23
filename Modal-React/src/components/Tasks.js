import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

const Tasks = () => {

    const [button, setButton] = React.useState(false)
    const [button_1, setButton_1] = React.useState("green")
    const [button_2, setButton_2] = React.useState("blue")
    const [button_3, setButton_3] = React.useState(true)

    const number = [1, 6, 7, 11, 8, 4, 13]
    const tek =[]
    for(let i in number){
        let r = number[i];
        if(r/2 - Math.floor(r/2) === 0.5){
            tek.push(r)
        }
    }

    const number2 = [3, 4, 2, 7, 8, 12, 6, 4]
    const bir = []
    for(let t in number2) {
        let d = number2[t]
        
         

    }

    console.log(bir)



  return (
    <div className='mt-5 mb-5'>
        <button 
            className='btn text-white mx-5' 
            style={{backgroundColor: button ? "black" : "red"}}
            onClick={() => setButton(!button)}
        >
            Yeni Button
        </button>

        <button 
            className='btn text-white' 
            style={{backgroundColor: button_1}}
            onClick={() => setButton_2("green")}    
        >
            Button 1
        </button>

        <button 
            className='btn text-white mx-5' 
            style={{backgroundColor: button_2}}
            onClick={() => setButton_1("blue")} 
            >
            Button 2
        </button>


        <button 
            className='btn text-white' 
            style={{backgroundColor: button_3 ? "pink" : "yellow"}}
            onClick={() => setButton_3(!button_3)}   
        >
            Button 3
        </button>

        <button 
            className='btn text-white mx-5' 
            style={{backgroundColor: button_3 ? "yellow" : "pink"}}
            onClick={() => setButton_3(!button_3)}  
            >
            Button 4
        </button>



        {/* {number.map((x, y) => (
            <h1>
    
            </h1>
        ))} */}
        
    </div>
  )
}

export default Tasks