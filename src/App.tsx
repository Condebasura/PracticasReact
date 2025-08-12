import './App.css'
import { useState } from 'react';
import Inputs from './components/Inputs';
import InputDiv from './components/DivInputs';
import Btn from './components/Btn';


// Las funciones se declaran con la primera letra en mayúscula

// Seguir practicando sobre los hooks , booleans y demas
type Campo = {
    className:string;
    name: string;
}

type FormProps={
    titulo: string;
    campos: Campo[];
}


 function Formulario({titulo , campos}: FormProps){
return(
    <InputDiv
    titulo={titulo}
    childrens={(
        <>
        {campos.map((campo ,i )=>{
            <Inputs
            key={i}
            name={campo.name}
            className={campo.className}
            />
        })}
        </>
    )}
    />
);
}

export default function App() {
const [Tipos , setTipos] = useState('Ingreso');

    
  
return(<>
<div className='row '>

<div className='m-5 col-1 border border-end-5 '>

<Btn titulo='ingreso' className='btn btn-success m-2' onClick={()=> setTipos('Ingreso')}/>
<Btn titulo='Turno' className='btn btn-primary m-2' onClick={()=> setTipos('Turno')}/>
</div>
<div className='mt-5'>
{Tipos === 'Ingreso' &&( <Formulario
titulo='Ingreso' 
campos={[
{className: 'bg-primary m-2' , name: 'Nombre'},
{ className: 'bg-primary m-2' , name: 'Apellido'},
{className: 'bg-primary m-2' , name: 'Direccion' },
]}
/>)}
{Tipos === 'Turno' &&( <Formulario
titulo='Turno'
campos={[
{className: 'bg-primary m-2' , name: 'Nombre'},
{ className: 'bg-primary m-2' , name: 'Apellido'},
{className: 'bg-primary m-2' , name: 'DNI' },

]}

/>)}
</div>


</div>
</>)
}




