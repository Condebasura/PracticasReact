import './App.css'
import { useState } from 'react';
import Formulario from './components/Form';
import Btn from './components/Btn';




// Las funciones se declaran con la primera letra en mayúscula

// Seguir practicando sobre los hooks , booleans y demas


export default function App() {
const [Tipos , setTipos] = useState('Ingreso');

  
return(<>
<div className='row '>

<div className='m-5 col-1 border border-end-5 '>

    
<Btn titulo='ingreso' className='btn btn-success m-2' onClick={()=> setTipos('Ingreso')}/>
<Btn titulo='Turno' className='btn btn-primary m-2' onClick={()=> setTipos('Turno')}/>
</div>
<div className='m-5'>
{Tipos === 'Ingreso' &&( <Formulario
titulo='Ingreso' 


campos={['Nombre', 'Apellido']}


/>)}
{Tipos === 'Turno' &&( <Formulario
titulo='Turno'

campos={['Nombre', 'Apellido', 'DNI']}
    




/>)}
</div>


</div>
</>)
}




