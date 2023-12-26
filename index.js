let count=0

let countEl= document.getElementById ("count-el")
console.log (countEl)
function increment(){
   
  count +=1
  console.log(count)
  countEl.innerText=count 
}
function save(){
    let value= count + ' - '
    let saveEL=document.getElementById ("save-el")
    saveEL.textContent += value
    count=0
    countEl.innerText=count
  console.log(count)

}

// strings
// let welcomeEL = document.getElementById("welcome-el")
// let naMe= "per"
// let greetings= "hello"
// let myGreetings= greetings+","+ naMe +"!"
// //    console.log(myGreetings)


// welcomeEL.innerText = myGreetings