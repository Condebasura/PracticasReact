interface PanelProps{
    title: string;
    children: React.ReactNode;
    isActive: boolean;
    inShow: () => void;
}

export default function Panel({title, children, isActive, inShow}:  PanelProps){
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