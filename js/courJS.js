var modal = document.getElementById("leadModal");
console.log(modal,'consol log de modal');


function modalHomePage() {
     if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        modal.style.display = "block";
        //annul l'evenement window.onscroll
        window.onscroll = null;

    }
}

window.onscroll = function(){modalHomePage()};
var btn = document.getElementById("btn");
btn.onclick = function() {
    modal.style.display = "none";
}
