interface PanelProps{
    title: string;
    children: React.ReactNode;
    isActive: boolean;
    inShow: () => void;
}

export default function Panel({title, children, isActive, inShow}:  PanelProps){
  // Al pasar como props el estado del padre mas cercano estamos 'levantando el estado'.
  return(
    <>
    <section className='border border-5 border-primary  mb-3 mt-3 p-3'>
    <h3>{title}</h3>
     {isActive ?(
      <p>{children}</p>
     ):(
      <button className='btn btn-success' onClick={inShow}>
       Mostrar 
      </button>
     )}
    </section>
    </>
  )
}