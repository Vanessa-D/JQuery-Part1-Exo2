// Modification du DOM --> Afficher une div

// $ --> JQuery() permet de transformer l'élément en objet JQuery

// La méthode show() transforme le style ciblé par l'id en display block

$(document).ready(function(){
    $('#text').show();
});


// En JS vanilla, on aurait :
// document.getElementById("texte").style.display="block";