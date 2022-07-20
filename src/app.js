const path=require('path')
const express=require('express');
const hbs =require('hbs')
// console.log(__dirname);
// console.log(path.join(__dirname,'../public'))
const app=express()

//Define Paths for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../template/views')
const partialPath=path.join(__dirname,'../template/partials')
app.set('views',viewsPath)


//Setup handlebar engine and view location
app.set('view engine','hbs')
// app.use(express.static())


hbs.registerPartials(partialPath) 
//Setup static directory to serve:
app.use(express.static(publicDirectoryPath))
// app.use(express.static(viewsPath))
app.get('/kkk',(req,res)=>{
    res.render('../view/index',{
        title:"thisisAtul",

        name:"atulChauhan",
        age:21
    })
})

app.get('/about',(req,res)=>{
    res.render("about",{
        title:"softWare Engineer",
        team:"R3"
    })
})

app.get('/help',(req,res)=>{ 

    res.render('help',{
        err:"i am here to handle your errors tell me what is the problem",
        title:"this is atul chauhan's website Do not interfere",
        name:"atul devloper"
    })
})
// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title:'about me ',
//         naav:'atul chauhan' 
//     }) 
// })
   
//app.com
//app.com/help

app.get('/',(req,res)=>{
    res.render('index')

})

app.get('/help',(req,res)=>{
    res.send("help page") 
})
  
app.listen(8000,()=>{
    console.log("Server is on port 8000")
})

app.get('/router',(req,res)=>{
    res.send({name:"atul",age:21,work:"softwareEngineer"})
})

app.put('/update',(req,res)=>{
    
})

app.get('/products',(req,res)=>{

    if(!req.query.search){
         res.send("Please provide search terms.")
    }
    // else{
 
    
    console.log(req.query)
    res.send({product:[]})
    // }
})
  

app.get('*',(req,res)=>{
    res.render('404',{
        title:"thisis 404 page",
        name:"atul chauhan"
    })
})
