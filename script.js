document.getElementById("mobile").addEventListener("click", function(){
    document.querySelector(".share-mobile").classList.toggle("share-mobile-active");
    document.querySelector(".container-footer").style.display = "none";
})

document.getElementById("laptop").addEventListener("click", function(){
    document.querySelector(".share").classList.toggle("share-laptop-active");
  
})


