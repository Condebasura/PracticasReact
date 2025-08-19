type Props = {
    name: string;
    className: string;
    value: string;
   onChange:(value: string) => void;
  
    
}
export default function Inputs ({name , className , value , onChange }:Props){
    return (
    <>
    <label>
     {name}
     <input className={className} 
      value={value}
      onChange={(e)  => onChange(e.target.value)}
     />
    </label>
    
    </>
)}