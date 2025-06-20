import './App.css'
import { useState } from 'react';
import BtnCard from './components/BtnCard';
import BtnClose from './components/BtnClose';
import { people } from './data';


// Las funciones se declaran con la primera letra en mayúscula



/*function BtnLogin({onClick}) {

  return (
    <button className=' btn btn-success ms-3' onClick={onClick} >
      Login
    </button>
  )
};

function BtnCreate({onClick}) {

  return (
    <button className='  btn btn-primary ms-3' onClick={onClick}>
      Create
    </button>
  )
};*/

export default function App() {
  /*const [mostrarCardLogin, setMostrarCardLogin] = useState(false);
  const [mostrarCardCreate , setMostrarCardCreate] = useState(false);
  
  const agregarCardCreate = () =>{
     setMostrarCardCreate(true);
     if(mostrarCardLogin === true){
           setMostrarCardLogin(false)
     }
  }
  const agregarCardLogin = () => {
    setMostrarCardLogin(true)
    if(mostrarCardCreate === true){
      setMostrarCardCreate(false)
    }
  }
  return (
    <>
      <header className='Header_Nav mt-2'>

        <nav className=' nav d-flex '>
          <BtnLogin onClick={agregarCardLogin} />
          <BtnCreate onClick={agregarCardCreate}/>
        </nav>
      </header>

      <div className='m-5'>
        {mostrarCardLogin && (
          <div className='card card-login'>
            <div className='card-header text-center text-bg-dark'>
              <h5 className='card-title'>Login</h5>
            </div>
            <div className="card-body m-4">
              <form>
                <div className='form-floating mb-3'>
                  <input type="email" className='form-control' id='floatingInput' placeholder='Email' />
                  <label htmlFor="floatingInput" >Email</label>
                </div>
                <div className='form-floating mb-3'>
                  <input type="password" className='form-control' id='floatingPassword' placeholder='Password' />
                  <label htmlFor="floatingPassword" className="form-label">Password</label>
                </div>
              </form>
            </div>
                <div className='card-footer text-center'>
                  <button className='btn btn-success'>Iniciar sesion</button>
                </div>
          </div>
        )}

        {mostrarCardCreate &&(
          <div className='card card-create'>
            <div className='card-header text-center text-bg-success'>
              <h5 className='card-title'>Create</h5>
            </div>
            <div className='card-body m-4'>
              <form >
              <div className='form-floating mb-3'>
                <input type="text" className='form-control' id="floatingName" placeholder='Nombre'/>
                <label htmlFor="floatingName" className="form-label">Nombre</label>
              </div>
              <div className='form-floating mb-3'>
                <input type="text" className='form-control' id="floatingApellido" placeholder='Apellido'/>
                <label htmlFor="floatingApellido" className="form-label">Apellido</label>
              </div>

              <div className='form-floating mb-3'>
                  <input type="email" className='form-control' id='floatingInput' placeholder='Email' />
                  <label htmlFor="floatingInput" >Email</label>
                </div>
                <div className='form-floating mb-3'>
                  <input type="password" className='form-control' id='floatingPassword' placeholder='Password' />
                  <label htmlFor="floatingPassword" className="form-label">Password</label>
                </div>


              </form>

            </div>
            <div className='card-footer text-center '>
                  <button className='btn btn-success float-end'>Enviar</button>
                </div>
          </div>
        )}
      </div>

    </>
  )*/
const [mostrarCard , setMostrarCard] = useState(false);
const [Person , setPerson] = useState(people)

 const agregarCard = ()=>{
  if(Person.length === 0){
    setPerson(people)
  }
   setMostrarCard(true)
 
 }

 /*return(
  <>
  <nav className='mt-3'>

   <BtnCard onClick={agregarCard}/>
   </nav>

   <ul>
    {Person.map(person => (
      <li key={person.id}>
        {person.name}{''}
        <BtnClose onClick={()=>{
          setPerson(
            Person.filter(a => a.id !== person.id)
          )
        }}/>
      </li>
    ) )}
   </ul>
  </>
)
*/
return(
  <>
  <nav className='mt-3'>

   <BtnCard onClick={agregarCard}/>
 
  </nav>
 <div className='m-5'>
    {mostrarCard &&(<div className='d-flex'>{  Person.map(person => 
<div className='card mb-3 ms-2 col 'key={person.id} >
  
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
                setPerson(pipol =>{

                 const nuevoP = pipol.filter(a => a.id !==  person.id );
                 if(nuevoP.length === 0){
                  setMostrarCard(false)
                 }
                 
                 return nuevoP;
                }
                );
               
                
               }}/>
              </div> 
                
                
          </div>
   )} </div>
  )}

  </div>
 
   </>
)




}
