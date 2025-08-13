import InputDiv from "./DivInputs";
import Inputs from "./Inputs";

type Campo = {
    className:string;
    name: string;
}

type FormProps={
    titulo: string;
    campos: Campo[];
}


export default function Formulario({titulo , campos}: FormProps){
return(
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
        </>
    )}
    />
);
}