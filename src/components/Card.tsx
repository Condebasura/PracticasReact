import { useState } from "react";
import { people } from "../data";
import BtnClose from "./BtnClose";



export default function Card({titulo}){

const [Person , setPerson] = useState(people)

  const listItem = people.map(person => 
<div className='card mb-3 ms-2 col 'key={person.id} >
  
            <div className= "text-center text-bg-success">
              <h5 className='card-title col'>{titulo}</h5>
             
              
            </div>
            <div className="card-body m-4">
              <ul className='list-group'>

              <li className='text-center list-group-item border-0' >{person.name}</li>
              <span className='mt-2 text-center'>profession: {person.profession}</span>
              </ul>

             
            </div>
                
                  <button className="btn btn-success" onClick={()  =>{
                   setPerson(
                    people.filter(Person => Person.id !== person.id)
                   )

                  }}>Eliminar</button>
                
                
          </div>
   );
   
   return <div className='d-flex'> {listItem} </div>    
  
}