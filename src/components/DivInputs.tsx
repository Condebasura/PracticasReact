type Props ={
    titulo: string;
    childrens: React.ReactNode;
}

export default function InputDiv ({titulo, childrens}: Props){

    return(
        <>
        <div>
            <h2 className="text-center">{titulo}</h2>
            
               <div>
                   {childrens}
                
               </div> 
            
        </div>
        </>
    )
}