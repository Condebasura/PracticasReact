
import { people } from "../data";
import BtnClose from "./BtnClose";

export default function Card({titulo}){

const [Card , setCard] = useState(true);
  
const quitarCard =()=>{
setCard(false)
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
                  <BtnClose onClick={quitarCard}/>
                </div>
          </div>
   );




console.log(listItem)
   
  return <div className='d-flex'> {listItem}</div>
    
  
}