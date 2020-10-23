(function(){
    let si= document.getElementById('si');
    si.addEventListener("click", function(e){
        alert("Entonces seamos felices juntos siempre ;333");
    });

    let no= document.getElementById('no');
    no.addEventListener("click", function(e){
        alert("Pero por qué?? :'''''V Pensé que dirías que sí :'''''VV");
    });

    no.addEventListener("mousemove", function(e){
        let x = Math.round(Math.random() * 93);
        let y = Math.round(Math.random() * 93);
        no.style.left = x+"%";
        no.style.top = y+"%";
    });
}());