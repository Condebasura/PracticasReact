import { useRef } from "react";

export default function Formulario(){
const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }

    return(
        <>
            <input ref={inputRef}/>
            <button onClick={handleClick}>
                Enfoca el input
            </button>
        </>
    )
}