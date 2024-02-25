function afficherpopup (){
 //la popup est masquée par display none
 //elle devient visible si sa classe devient #active
 let popupbackground= document.querySelector(".popupbackground");
 popupbackground.classList.add("active");

}
function cacherpopup(){
    //cache la popup en remplaçant sa classe par .popupbackground
    let popupbackground= document.querySelector(".popupbackground");
    popupbackground.classList.remove("active");
  
}

function Pop(){
     //écoute de click sur le btnpartager
     let btnpartager= document.querySelector(".partager .btnpartager");
     let btnenvoyer= document.querySelector(".popup button");
     btnpartager.addEventListener("click", 
         //au click il affiche la popup
         ()=>{afficherpopup()} )

         btnenvoyer.addEventListener("click",
         //cache la popup quand on click endehors de la fenêtre ouverte
         //et pas sur un élément qu'il contient comme la div popup
         (event)=>{
            if(event.target === btnenvoyer) {cacherpopup()} 
        }) 
}
Pop()




function afficherpopup2(){
    //la popup est masquée par display none
    //elle devient visible si sa classe devient #active
    let popupbackground2= document.querySelector(".popupbackground2");
    popupbackground2.classList.add("active2");
   
   }
   function cacherpopup2(){
       //cache la popup en remplaçant sa classe par .popupbackground
       let popupbackground2= document.querySelector(".popupbackground2");
       popupbackground2.classList.remove("active2");
     
   }
   
   function Pop2(){
        //écoute de click sur le btnpartager
        let btncommenter= document.querySelector(".partager .btncommenter");
        let btnsentcomment= document.querySelector(".popup2 button");
        btncommenter.addEventListener("click", 
            //au click il affiche la popup
            ()=>{afficherpopup2()} )
   
            btnsentcomment.addEventListener("click",
            //cache la popup quand on click endehors de la fenêtre ouverte
            //et pas sur un élément qu'il contient comme la div popup
            (event)=>{
               if(event.target === btnsentcomment) {cacherpopup2()} 
           }) 
   }
   Pop2()
