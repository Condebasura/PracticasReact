
import InputDiv from "./DivInputs";
import Inputs from "./Inputs";
import Btn from "./Btn";
import { useState } from "react";



type Campo = {
    className:string;
    name: string;
}

type FormProps={
    titulo: string;
    campos: Campo[];
    

}


export default function Formulario({titulo , campos }: FormProps){
const [nombre , setNombre] = useState('');

const handleSubmit = (e: React.FormEvent)  =>{
    e.preventDefault();
    console.log("este es el nombre", nombre)
}

    return(
        <form onSubmit={handleSubmit}>


        <InputDiv
        titulo={titulo}
        childrens={(
        <>
        {campos.map((campo ,i )=>{
          return(
             
            
              <Inputs
              key={i}
              name={campo.name}
              className={campo.className}
           
                   
              />
            ) 
        })}
        <button>Enviar</button>
</>
    )}
    
    />
    </form>
);
}