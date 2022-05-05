let lnk=document.querySelectorAll(".row a");
let crd=document.querySelectorAll(".all .collapse");
lnk.forEach(link=>{
    link.onclick=function(){
        document.querySelectorAll(".all .collapse").forEach(e=>{
            e.classList.remove("show");
        })
    }
});