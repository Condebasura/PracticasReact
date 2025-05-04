import './App.css'
import { useState } from 'react'

// Las funciones se declaran con la primera letra en mayúscula



function BtnLogin({ onClick }) {

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
};



function App() {
  const [mostrarCardLogin, setMostrarCardLogin] = useState(false);
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
  )

}


export default App;