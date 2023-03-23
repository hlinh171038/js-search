

const userCardTemplate = document.querySelector('[data-user-template]')
const userCardContainer = document.querySelector('[data-user-cards-container]')
const searchInput = document.querySelector('[data-search]')
let users =[]
// feching api
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then (data =>{
  users = data.map(user =>{
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector('[data-header]')
        const body = card.querySelector('[data-body]')
        header.textContent = user.name;
        body.textContent = user.email;
        userCardContainer.appendChild(card)
        return {name:user.name,email:user.email,element:card}
    })
    return users
})
console.log(users)

// addevent listener
searchInput.addEventListener('input',searchInfo)

function searchInfo(e){
    const value = e.target.value
    users.forEach(user=>{
        user.element.classList.remove('hide')
        if(user.name.includes(value)||user.email.includes(value)){
            user.element.classList.remove('hide')
        }else{
            user.element.classList.add('hide')
        }
    })
}

