let navlinks = document.querySelector('.navlinks');
document.querySelector('#menu-btn').onclick = () =>{
    navlinks.classList.toggle('active');
}

window.onscroll = () => {
    navlinks.classList.remove('active');
}


let accordion = document.querySelectorAll('.accordion .contentBx');
accordion.forEach(acco =>{
    acco.onclick=()=>{
        accordion.forEach(subAcco =>{ subAcco.classList.remove('active') });
        acco.classList.add('active');
    }
})
