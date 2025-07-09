interface Close {
  onClick: () => void;
}
export default function BtnClose({onClick }: Close){
  return(
    <button className='btn btn-danger m-3' onClick={onClick}>
      Cerrar
    </button>
  )
}