// nav animation
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").style.opacity = "1";
    }
    else {
        document.getElementById("navbar").style.opacity = "0.6"; 
    }
}

//nav responsive: hamburguesa
function myFunction() {
    var x = document.getElementsById("myTopnav");
    if(x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav"
    }
}

// form validation
(function() {
    var form = document.getElementsByName('form')[0],
        elementos = form.element,
        boton = document.getElementById('btn');

    var validarFname = function(e) {
        if(form.fname.value == 0) {
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    }

    var validarEmail = function(e) {
        if(form.email.value == 0){
            alert("Completa tu email");
            e.preventDefault();
        }
    }

    var validarTextarea = function(e) {
        if(form.message.value == 0) {
            alert("Deja tu mensaje");
            e.preventDefault();
        }
    }

    var validar = function(e){
        validarFname(e);
        validarEmail(e);
        validarTextarea(e)
    }

    form.addEventListener("submit", validar);
})

// Filtro de productos 

filterSelection('all')
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if(c == "all") c = "";
    for(i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        (x[i].className.indexOf(c) > - 1) && AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++) {
        while(arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(" ");
}

//Resaltar el botón 
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", ""); 
        this.className += " active";
    })
}


