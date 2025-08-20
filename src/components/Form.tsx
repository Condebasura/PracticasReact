

import Inputs from "./Inputs";
import { useState } from "react";





type FormProps={
    titulo: string;
    className:string;
    campos: string[];
    

}


export default function Formulario({titulo , className , campos}: FormProps){
    // Record pertenece a TypeScript y dice: 'mi objeto tiene clave de tipo string y  valores de tipo string'
const [valores , setValores] = useState<Record<string, string>>({});

const handleChange = (campo: string , valor: string)=>{
    setValores((prev) =>({...prev, [campo]: valor}));
    // ...prev sirve para copiar las propiedades de un objeto
}
// Dentro de la funcion de submit creo el envio por fetch dependiendo del formulario que se use

const handleSubmit = async (e: React.FormEvent)  =>{
    e.preventDefault();

    let url = "";
    if(titulo === 'Ingreso'){
       url = "http://localhost:5173"
        
    }else if(titulo === 'Turno'){
        url = "http://localhost:5173"
        
    }

    const res = await fetch(url, {
        method: "POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(valores)
    })
   const data = await res.json()
   console.log(`${titulo}`,data)
}

    return(
        <>
        <form onSubmit={handleSubmit} >
         <h3 className="text-center">
            {titulo}
            </h3>
            {campos.map((campo)=>(
             <div key={campo}>
              
            <Inputs 
            name={campo}
            className={className}
            value={valores[campo] || ''}
            onChange={(e)=> handleChange(campo, e)}
            />
            </div>
            ))}
            
             
           
         <button type="submit">Enviar</button>
    </form>
        </>
)
}