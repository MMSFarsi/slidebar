const side =document.querySelector(".side")
const cancle =document.querySelector(".cancle")
const sideBar =document.querySelector(".sidebar ")


const openSidebar=()=>{
    sideBar.classList.add("active")
}
side.addEventListener('click', openSidebar )


const openSide=()=>{
    sideBar.classList.remove("active")
}
cancle.addEventListener('click', openSide )


sideBar.addEventListener('click' , openSide)


