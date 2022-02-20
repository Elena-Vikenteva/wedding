// выпадающий список
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function prise() {
    document.getElementById("dropdown_prise").classList.toggle("show");
}

function forYou() {
    document.getElementById("dropdown_foryou").classList.toggle("show");
}

function collection() {
    document.getElementById("dropdown_").classList.toggle("show");
}

function sezon() {
    document.getElementById("dropdown_collection").classList.toggle("show");
}

function eve() {
    document.getElementById("dropdown_sezon").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var dropdowns = document.getElementsByClassName("dropdown-cont");


////модальное окно
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


    /// читать больше
    function button_more() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Читать больше";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Читать меньше";
            moreText.style.display = "inline";
        }
    }