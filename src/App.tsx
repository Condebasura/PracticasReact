import './App.css'
import { useState } from 'react';
import BtnCard from './components/BtnCard';
import { people } from './data';
import Card from './components/Card';
import Panel from './components/Panel';
import { Person } from './data';
import Formulario  from './components/Form';


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
const [Person , setPerson] = useState<Person[]>(people);
  // el estado se pasa como props en el componente Panel
const [activeIndex , setActiveIndex] = useState(0);

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
  <nav className='m-3  sticky-top'>

   <BtnCard onClick={agregarCard}/>
 
  </nav>
 <div className='m-5'>
    {mostrarCard &&(<Card
    setMostrarCard={setMostrarCard}
    personList={Person}
    setPersonList={setPerson}
    
    
    /> )}

  </div>

  <Panel
  title="Panel desplegado por defecto"
  isActive={activeIndex === 0}
  inShow={() => setActiveIndex(0)}
 children={"Un panel  que esta desplegado por defecto"} 
  />
  
  <Panel
  title="Panel oculto por defecto"
  isActive={activeIndex === 1}
  inShow={() => setActiveIndex(1)}
  children={"Un panel que esta oculto por defecto"}
  
  />
  
 <Formulario/>
   </>
)




}
