import React, {useState , useEffect} from 'react';
import './main.css';

const Main = () => {

   const [item , setItem] = useState("")


        const quotes =  (()=>{
            fetch("https://api.quotable.io/random")
            .then((res)=>res.json())
            .then((data)=>{
                setItem(data)
                console.log(data)
            })
        })
   
        useEffect(() => {
            quotes();
        }, [])
        
    
  return (
    <>
{

            <div className="container">
                
                <div className="content">
                <button className='Btn' onClick={quotes}>Generate</button>
                <h1>{item.content}</h1>
                <h5>Author : {item.author}</h5>
                <p>Date : {item.dateAdded}</p>
                </div>

        </div>
}

    </>
  )
}

export default Main