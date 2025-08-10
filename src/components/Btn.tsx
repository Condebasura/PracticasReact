type Props = {
    titulo: string;
    className: string;
    onClick: () => void;
    
}
export default function Btn({titulo, className, onClick}: Props){
    return <button className={className} onClick={onClick} >{titulo}  </button>
}




