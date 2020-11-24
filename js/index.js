const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// var img = document.getElementsByTagName("href");
// var text = document.getElementById("text");

// for (var i = 0; i < img.length; i++){
//     href[i].addEventListener("mouseover", function(){
//         var alt = this.alt;
//         text.textContent = alt;
//     });
// }