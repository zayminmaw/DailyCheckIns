const express = require('express');
const members = require("../../members");
const uuid = require("uuid");
const { json } = require('express');
const router = express.Router();

// Get All Members
router.get('/', (req,res)=>{
    res.json(members);
});

// Get Single Member
router.get('/:id',(req,res) =>{
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter( member => member.id === parseInt(req.params.id)));
    }else {
        res.status(400).json({ msg : `No Member with the id ${req.params.id}`})
    }
});

// Create Member
router.post('/',(req,res) =>{
    const nmember = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : "active"
    };
    if(!nmember.name || !nmember.email){
        return res.status(400).json({msg : "Please Include a name and email"});
    }
    members.push(nmember);
    res.json(members);
    // res.redirect('/');
});

// Update Member
router.put('/:id',(req,res) =>{
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        const upmember = req.body;
        members.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name = upmember.name ? upmember.name : upmember.name;
                member.email = upmember.email ? upmember.email : upmember.email;

                res.json({msg : "Member is Updated",member});
            }
        });
    }else {
        res.status(400).json({ msg : `No Member with the id ${req.params.id}`})
    }
});

// Delete Member
router.delete('/:id',(req,res) =>{
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json({msg : "Member Deleted", member: members.filter( member => member.id !== parseInt(req.params.id))});
    }else {
        res.status(400).json({ msg : `No Member with the id ${req.params.id}`})
    }
});
module.exports = router;

