const addFruit = document.querySelector('.add')
const fruitList = document.querySelector('.fruits')
const form = document.querySelector('.form')
const fruits = JSON.parse(localStorage.getItem('fruits'))|| []

const addFruits = (e)=>{
 console.log("hi")
 e.preventDefault()
 const text = (document.querySelector('[name=fruit]')).value
 const fruit ={
    text,
    done: false
 };
 fruits.push(fruit);
 fill(fruits,fruitList)
 localStorage.setItem('fruits',JSON.stringify(fruits))
//  console.log(fruit)
 document.querySelector('[name=fruit]').value = "";
 console.log(fruits)
}
const fill = (smoothies= [],smoothiesList)=>{
smoothiesList.innerHTML =  smoothies.map((drink,i)=>{
    return`
    <li>
    <input type="checkbox" data-index=${i} id="fruit${i}" ${drink.done ? 'checked':''}/>
    <label for="fruit${i}">${drink.text}</label/>
    </li>
    `
 }).join('')
}
const toggleCheck = (e)=>{
    if(!e.target.matches('input')) return;
// console.log(e.target)
const foo = e.target
const index = foo.dataset.index
console.log(foo.dataset.index)
fruits[index].done = !fruits[index].done
localStorage.setItem('fruits',JSON.stringify(fruits))
fill(fruits,fruitList)
}

addFruit.addEventListener('submit',addFruits)
fruitList.addEventListener('click',toggleCheck)
fill(fruits,fruitList)
