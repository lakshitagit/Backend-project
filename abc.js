// const express=require('express')
// const app=express()
// const host=3000
// app.use(express.json())
// const cors=require('cors')
// app.use(cors())

// let posts=[]

// //create post
// app.post('/createPost', (req, res)=>{

//     const post={
//         id:posts.length+1,
//         title:req.body.title,
//         content:req.body.content
//     }
//     posts.push(post)
//     res.status(201).json(post)

//     // console.log(req.body)
//     // console.log(typeof req.body)  
// })

// //read ll post
// app.get('/getAllPost',(req,res)=>{
//     res.json(posts)
// })
// app.get('/getPost/:id',(req,res)=>{
//     // console.log(req.params.id)
//     for(let index=0;index<posts.length;index++){
//         const element =posts[index];
//         if(element.id==req.params.id){
        
        
//         //     element.title.content=req.body.title
//         //    element.content=req.body.content

//             res.json(element)
//             return;
//         }}
//     res.json({
//         "msg": "no post with id found"
//     })
// })
// app.patch('/updatePost/:id',(req,res)=>{
//     for(let index=0;index<posts.length;index++){
//         const element =posts[index];
//         if(element.id==req.params.id){
            

//         //     element.title.content=req.body.title
//         //   element.content=req.body.content
// //posts.splice(index,1)
//             res.json(element)
//             return;
//         }}
//     res.json({
//         "msg": "no post with id found"
//     })

// })
// app.delete('/deletePost/:id',(req,res)=>{
//     for(let index=0;index<posts.length;index++){
//         const element =posts[index];
//         if(element.id==req.params.id){
//             posts.splice(index,1);

//         //     element.title.content=req.body.title
//         //   element.content=req.body.content
// //posts.splice(index,1)
//             res.json(element)
//             return;
//         }}
//     res.json({
//         "msg": "no post with id found"
//     })

// })


const express=require('express')
const app=express()
const host=3000
app.use(express.json())
const cors=require('cors')
app.use(cors())

let posts=[]

//create post
app.post('/createPost', (req, res)=>{

    const post={
        id:posts.length+1,
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        subject:req.body.subject,
        // messege:req.body.messege

    }
    posts.push(post)
    res.status(201).json(post)

    // console.log(req.body)
    // console.log(typeof req.body)  
})

//read ll post
app.get('/getAllPost',(req,res)=>{
    res.json(posts)
})
app.get('/getPost/:id',(req,res)=>{
    // console.log(req.params.id)
    for(let index=0;index<posts.length;index++){
        const element =posts[index];
        if(element.id==req.params.id){
        
        
        //     element.title.content=req.body.title
        //    element.content=req.body.content

            res.json(element)
            return;
        }}
    res.json({
        "msg": "no post with id found"
    })
})
app.patch('/updatePost/:id',(req,res)=>{
    for(let index=0;index<posts.length;index++){
        const element =posts[index];
        if(element.id==req.params.id){
            

        //     element.title.content=req.body.title
        //   element.content=req.body.content
//posts.splice(index,1)
            res.json(element)
            return;
        }}
    res.json({
        "msg": "no post with id found"
    })

})
app.delete('/deletePost/:id',(req,res)=>{
    for(let index=0;index<posts.length;index++){
        const element =posts[index];
        if(element.id==req.params.id){
            posts.splice(index,2);
        //     element.title.content=req.body.title
        //   element.content=req.body.content
//posts.splice(index,1)
            res.json(element)
            return;
        }}
    res.json({
        "msg": "no post with id found"
    })

})

app.listen(host,()=>{
    console.log("server started.....")
})