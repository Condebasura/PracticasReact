import { useState } from "react";
import { people } from "../data";
import BtnClose from "./BtnClose";


export default function Card({titulo  }){

const [laCard , setlaCard] = useState(true);
const quitarLacard = ()=>{
  setlaCard(false);
}
  const listItem = people.map(person => 

<div className='card mb-3 ms-2 col 'key={person.id} >
  
            <div className= "text-center text-bg-success">
              <h5 className='card-title'>{titulo}</h5>
              
            </div>
            <div className="card-body m-4">
              <ul className='list-group'>

              <li className='text-center list-group-item border-0' >{person.name}</li>
              <span className='mt-2 text-center'>profession: {person.profession}</span>
              </ul>

             
            </div>
                <div className="card-footer">
                  <BtnClose onClick={quitarLacard}/>
                </div>
          </div>
   );




console.log(listItem)
return <div className='d-flex'> {laCard && (listItem)} </div>
    
  
}