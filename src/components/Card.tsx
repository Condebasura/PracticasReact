
import BtnClose from "./BtnClose";



export default function Card({ setMostrarCard, personList, setPersonList}) {


              return(

                  <div className='d-flex'>
{personList.map(person => 
<div className='card mb-3 ms-2 col 'key={person.id}>
  
            <div className= "text-center text-bg-success">
              <h5 className='card-title col'>Cientificos</h5>
             
              
            </div>
            <div className="card-body m-4">
              <ul className='list-group'>

              <li className='text-center list-group-item border-0' >{person.name}</li>
              <span className='mt-2 text-center'>profession: {person.profession}</span>
              </ul>

              </div>
             
               <div className='card-footer'>
              <BtnClose  onClick={()  =>{
              

                 const nuevoP = personList.filter(p => p.id !==  person.id );
                 if(nuevoP.length === 0){
                  setMostrarCard(false);
                }
                setPersonList(nuevoP)
              
               }}/>
              </div> 
                
                
          </div>

)}</div>

) 
}