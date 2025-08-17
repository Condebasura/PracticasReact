type Props = {
    name: string;
    className: string;
   
  
    
}
export default function Inputs ({name , className }:Props){
    return (
    <>
    <label>
     {name}
     <input className={className}  />
    </label>
    
    </>
)}