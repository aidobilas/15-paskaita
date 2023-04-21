
const tabs = document.getElementsByClassName("tab")
const h1 = document.querySelector("h1")
const buttons = document.getElementsByTagName("button")

// parodo pirma taba uzkraunant
tabs[0].style.display = "block"

function showTab(event, id) {
    //  paslapia visus tabus kai paleidziama funkcija
for(let i = 0; i < tabs.length; i++){
    tabs[i].style.display = "none"

    // nuima selected klase nuo mygtuku
    buttons[i].classList.remove("selected")
}

    // rodo tik ta pagal id paleidzia funkcija
    document.getElementById(id).style.display = "block"

    // prideda selected klase prie paspausto mygtuko
    evt.currentTarget.classList.add("selected")
    console.log(evt.currentTarget)
} 