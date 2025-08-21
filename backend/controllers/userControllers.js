
const PostIngreso = (req , res)=>{
    const dataIngreso = req.body;
    console.log(dataIngreso)
};

const PostTurno = (req, res)=>{
    const dataTurno = req.body;
    console.log(dataTurno)
}

export default {
    PostIngreso,
    PostTurno,
}