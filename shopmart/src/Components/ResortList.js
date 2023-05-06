import React,{useState,useEffect} from 'react'
import ResortItem from './ResortItem'

const ResortList = () => {

  const [resorts , setResorts] = useState([{
    id:0,
    title:"",
    price: 0,
    image : null
  }]);

  useEffect(()=>{
     fetch(process.env.REACT_APP_API_ENDPOINT)
    .then(response=>response.json())
  
    .then(json=>{setResorts(json.data)})
    
    .catch(err=>console.log(err))
    
  }, [])
  console.log(process.env.REACT_APP_API_ENDPOINT)
  console.log(resorts.data)

  return (
  <section id="section-resort-list">
    <div className= "container">
    
        <h1>Featured Resort</h1>
        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
        {resorts.map((resort,i)=>( <ResortItem key={i} id={resort._id} title={resort.title} image ={resort.photo} price={resort.rentPrice} />))}
         </div>
    </div>

  </section>

  )
}

export default ResortList