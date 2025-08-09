interface CardBtn {
  onClick: ()=> void;
}

export default function BtnCard ({onClick}: CardBtn){

  return(
    <button className='btn btn-secondary  ms-3' onClick={onClick}>
      Ver Tarjetas
    </button>
  )
};