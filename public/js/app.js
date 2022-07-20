// const { response } = require('express')

// console.log("helo")

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// }) 

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//             if(data.error){
//                 console.log(data.error)
//             }else{
//                 console.log(data.location)

//                 console.log(data.forecast)
//             }
//     })
// })

const weatherForm=document.querySelector('form')
const search = document.querySelector('input')
const messageOne=document.querySelector('#message1');
const messageTwo=document.querySelector('#message2')

messageOne.textContent='from JavaScript'

weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()

    // const location =search.value
    const location =search.value
    console.log(location)

})