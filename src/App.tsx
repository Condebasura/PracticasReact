import './App.css'
import { useState } from 'react';
import Inputs from './components/Inputs';
import InputDiv from './components/DivInputs';
import Btn from './components/Btn';

// Las funciones se declaran con la primera letra en mayúscula

// Seguir practicando sobre los hooks , booleans y demas

export default function App() {
const [Tipos , setTipos] = useState(0);

const DivTipos = ()=>{
  if(Tipos === 0){
    <InputDiv titulo='ingreso' isActive={true}
    
    childrens={(
<>
  <Inputs className='bg-primary m-2' name={'nombre'}/>
<Inputs className='bg-success m-2' name={'apellido'}/>
<Inputs className='bg-secondary m-2' name={'direccion'}/>

 </>
)}
    />  
  }else{
     <InputDiv titulo='Turno' isActive={false}
    
    childrens={(
<>
  <Inputs className='bg-primary m-2' name={'nombre'}/>
<Inputs className='bg-success m-2' name={'apellido'}/>
<Inputs className='bg-secondary m-2' name={'DNI'}/>

 </>
)}
    /> 
  }
}
return(<>
<div className='row '>

<div className='m-5 col-1 border border-end-5 '>

<Btn titulo='ingreso' className='btn btn-success m-2' onClick={DivTipos}/>
<Btn titulo='Turno' className='btn btn-primary m-2' onClick={DivTipos}/>
</div>



</div>
</>)
}

