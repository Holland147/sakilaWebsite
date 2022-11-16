import React, { Component, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css"
import axios from 'axios';

const Header = () => {
    return(
        <div className= 'color'>
        <h1>Json API test</h1>
        </div>
    )
    
}

// const CatAPI = () => {
    
//     function getCats(){
//     fetch('https://catfact.ninja/fact')
//     .then(res => res.json())
//     .then((data) => setCats(data.fact));
// }

//     const [fact, setCats] = useState([])
    
    

//     useEffect(() => {
//         getCats()
//     }, 
//      []);

//     return(<div><h1>{fact}</h1>
//     <button onClick={getCats}>load another</button>
//     </div>) 
    
// }

const FetchData = () => {
   
    
        const [films, setRandom] = useState([])

        
        useEffect(() =>{
            fetchFilm()
        }, [])
        let num = "3"
        let url = "https://demo-1668596830448.azurewebsites.net/home/randomFilm/" + num;
        const fetchFilm = async () =>{
            const {data} = await axios.get(url)
            

            setRandom(data)
            
        }
        
        
        return(<div>
          
            {films.map(post => (
              
                <div  key={post.id}>
                    
                    <p>Random Film</p>
                    <p>Title: {post.myTitle} <p>Description:{post.myDescription}</p><p> Age Rating: {post.myRating}</p> </p>
                </div>
            )
                )}
        <button onClick={fetchFilm}>Generate Random Films</button>
        </div>) 

}






const FetchName = (SetNameFirst) => {

  const [names, setNames] = useState([])
  
    




  useEffect(() =>{
    fetchName()
  }, [])

  let testName = "Check"

  let url = "http://localhost:8080/home/filmActorLastName/" + testName
  const fetchName = async () =>{
    const {data} = await axios.get(url)
    

    setNames(data)
    
}

return(<div>
         
  {names.map(post => (
    
      <div  key={post.id}>
          
          <p>Film by name:{testName}</p>
          <p>Title: {post.myTitle} <p>Description:{post.myDescription}</p><p> Age Rating: {post.myRating}</p> </p>
      </div>
  )
      )}
<button onClick={fetchName}>Generate Random Films</button>
</div>) 


}

function RandomFilms()
{
    const[search, setSerch] = useState("https://demo-1668596830448.azurewebsites.net/home/randomFilm/");
    const[update, setUpdate] = useState(false);
    const searchBox = useRef();
    const baceUrl = "https://demo-1668596830448.azurewebsites.net/home/randomFilm/"
    let myUrl = "https://demo-1668596830448.azurewebsites.net/home/randomFilm/";

    const changeUpdate = () =>{
        setUpdate(false);
    }

    const handlChange = e =>
    {
        if (e.target.value === "")
        {
            myUrl = "https://demo-1668596830448.azurewebsites.net/home/randomFilm/1"
        } else
        {
            myUrl = baceUrl + e.target.value
            setUpdate(true);
            setSerch(myUrl);
        }
        
        
    }

    return(
    <div>
         <input type="text" ref={searchBox} onChange={handlChange}></input>
         <div>{GetAPIs(search, update, changeUpdate)}</div>
    </div>)
}

function GetAPIs(url, myUpdate, myChangeUpdate)
{
    console.log(`in get api ${url}`);
    const [myJson, setJson] = useState([]);

    const getAPI = async () =>{
        console.log("in async");
        console.log(`url async: ${url}`);
        const res = await fetch(url);
        console.log(res);
        const responce = await res.json();
        console.log(responce);

        console.log("got responce");

        setJson(responce);
    }

    useEffect(() =>
    {
        if(myUpdate)
        {
            try
            {
                console.log("in try")
                getAPI();
                myChangeUpdate();
            }
            catch(err)
            {
                console.log(err);
            }

        }
       
       
    },[myUpdate])

    return(
        <div>
            {myJson.map((film) =>(
            <div>
                <p>
                    Film: {film.myTitle} <br></br>
                    Discription: {film.myDescription}
                </p>
            </div>
        ))}
        </div>
        
    )
}

function ActorFirstName()
{
    const[search, setSerch] = useState("https://demo-1668596830448.azurewebsites.net/home/filmActorLastName/");
    const[update, setUpdate] = useState(false);
    const searchBox = useRef();
    const baceUrl = "https://demo-1668596830448.azurewebsites.net/home/filmActorLastName/"
    let myUrl = "https://demo-1668596830448.azurewebsites.net/home/filmActorLastName/";

    const changeUpdate = () =>{
        setUpdate(false);
    }

    const handlChange = e =>
    {
        if (e.target.value === "")
        {
            myUrl = "https://demo-1668596830448.azurewebsites.net/home/filmActorLastName/"
        } else
        {
            myUrl = baceUrl + e.target.value
            setUpdate(true);
            setSerch(myUrl);
        }
        
        
    }

    return(
    <div>
         <input type="text" ref={searchBox} onChange={handlChange}></input>
         <div>{GetAPIs(search, update, changeUpdate)}</div>
    </div>)

    }


    function SearchTitle()
{
    const[search, setSerch] = useState("https://demo-1668596830448.azurewebsites.net/home/selectFilmByTitleList/");
    const[update, setUpdate] = useState(false);
    const searchBox = useRef();
    const baceUrl = "https://demo-1668596830448.azurewebsites.net/home/selectFilmByTitleList/"
    let myUrl = "https://demo-1668596830448.azurewebsites.net/home/selectFilmByTitleList/";

    const changeUpdate = () =>{
        setUpdate(false);
    }

    const handlChange = e =>
    {
        if (e.target.value === "")
        {
            myUrl = "https://demo-1668596830448.azurewebsites.net/home/selectFilmByTitleList/"
        } else
        {
            myUrl = baceUrl + e.target.value
            setUpdate(true);
            setSerch(myUrl);
        }
        
        
    }

    return(
    <div>
         <input type="text" ref={searchBox} onChange={handlChange}></input>
         <div>{GetAPIs(search, update, changeUpdate)}</div>
    </div>)

    }





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div><Header></Header><RandomFilms/><ActorFirstName/><SearchTitle/></div>);