type Props ={
    titulo: string;
    childrens: React.ReactNode;
    isActive: boolean;
    
   
}

export default function InputDiv ({titulo, childrens, isActive}: Props){

    return(
        <>
        <div>
            <h2 className="text-center">{titulo}</h2>
            {isActive?(
               <div>
                   {childrens}
                
               </div> 
            ):(
                <div className="d-none"></div>
            )}
        </div>
        </>
    )
}