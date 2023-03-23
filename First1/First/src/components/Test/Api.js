import React from 'react'

const Api = () => {
    const [api, aetApi]= React.useState([])

    // async function fetchMovies() {
    //     const responsive = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const users = await Response.json();
    //     return setApi(users);
    // }

    // React.useEffect(() =>{
    //     fetchMovies()
    // }, [])

    async fetchData() {
         fetch("https://jsonplaceholder.typicode.com/posts")
         .then(response => {
            return response.json()
         })
         .then(data => {
            setApi(data)
         })
        
    }

    React.useEffect(() =>{
        fetchData()
    }, [])
  return (
    <div>{api.map((item, key) =>(
      
        <div>
            <h1>
                {item.name}
            </h1>
      </div>
   ))} </div>
  )
}

export default Api
