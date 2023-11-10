import express from 'express';
import { v4 as uuidv4 }  from 'uuid';
uuidv4();
const router=express.Router();
let users=[]

router.get('/',(req,res)=>{

    console.log(users);
    res.send(users);
});
router.post('/',(req,res)=>{
    const user= req.body;
    const userId=uuidv4();
    const userwithId={ ...user,id:userId};
    users.push(userwithId);
    res.send("Send request");
});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const founduser=users.find((user)=> user.id==id);
    res.send(founduser);
});
router.delete('/:id',(req,res)=>{

    const {id}=req.params;
    users=users.filter((user)=> user.id != id);
});
router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const {name,age}=req.body;
    const user =users.find((user)=> user.id==id);
    if(name)
    {
        user.name=name;


    }
    if(age)
    {
        user.age=age;
    }

});
export default router;