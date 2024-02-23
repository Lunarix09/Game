let tbimages= ["image1.png", "image2.png", "image3.png","image4.png", "image5.png", "image6.png", "image7.png"

];
let tbmots=["yeux","reine","disney", "pousser", "appache", "ananas", "arcade"

]; 
let playimages= ["playgame.png", "playgame1.png", "playgame2.png", "playgame3.png", "playgame4.png"];

 let Tbmots= new Array;

function validernom(nom){
    if(nom.length > 2){return true} return false
}
function valideremail(email){
    let regexp= new RegExp("^[a-zA-Z0-9&._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]")
    if(regexp.test(email) ){return true} return false
}
function affichernomemail(nom, email, scoreafficher){
    let mailto= `mailto:${email}?subject=Partage de mon score&body= Salut je suis ${nom} et j'ai fait ce score: ${scoreafficher} en jouant à 3 Images 1 Mot `;
    location.href= mailto;
}

function mélangemots(I){
    for(let i2 = 1; i2 < tbmots.length+1; i2++) {  
         let Tbimages= tbimages[I] ;
         let checkimg= "image"+[i2]+".png"
         console.log(checkimg, Tbimages);
         if(Tbimages === checkimg){ 
             console.log(tbmots[i2-1]);
             Tbmots.push(tbmots[i2-1]);
             console.log('yes');
             I++;
             i2 =0;
            }else{console.log('no')}
            if (tbimages[I] === undefined) {break}
    }
    
}


function lancer(){
     let i1= 0;
     let score= 0;
     let i3= 0 ;

     let img= document.querySelector(".images span img");
     let btnnext = document.getElementById("btnnext");
     let btnok= document.getElementById("btnok");
     let btnplay= document.getElementById("btnplay");
     let zoneréponse= document.querySelector("#zoneréponse");
     let balisenom= document.getElementById("nom");
     let baliseemail= document.getElementById("email");
     let form= document.querySelector("form");

    // Fonction pour mélanger un tableau (utilise le mélange de Fisher-Yates)
     function shuffleArray(array) {
         for (let i = array.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [array[i], array[j]] = [array[j], array[i]];
         
            }
        }
        // Mélange le tableau d'images
         shuffleArray(tbimages);
        //mélange des mots
         mélangemots(i3);
         console.log(tbimages, Tbmots);
    //m2lange du playimages
    function mélangeplayimages(){
        shuffleArray(playimages)
        img.src= playimages[0]
    }mélangeplayimages()

         
    btnplay.addEventListener("click",
    ()=>{ console.log("play");
        img.src= tbimages[i1];
        document.getElementById("btnplay").disabled= true;
   
    }) 
    
    btnok.addEventListener("click",
     ()=>{
         console.log("ok");
         console.log("R= "+Tbmots[i1]);
         let réponse = zoneréponse.value;  
         console.log(réponse);

         if(réponse===Tbmots[i1]) {
             score++;
             console.log("correct");
             
            }else{console.log("faux")};
         i1++;
         zoneréponse.value="";
         comptescore(score,i1);
         img.src= tbimages[i1];
        
         if (tbimages[i1] === undefined) {
             console.log("end game");
             btnok.disabled= true;
             btnnext.disabled= true;
             btnplay.disabled= true;
             img.src= "endgame.png";
             zoneréponse.disabled= true; 
            }
        })

    btnnext.addEventListener("click", ()=> { 
         i1++ 
         comptescore(score,i1)
         console.log("next")
         img.src= tbimages[i1]
         zoneréponse.value="" 
         
            if (tbimages[i1] === undefined) {
                 console.log("end game")
                 btnok.disabled= true;
                 btnplay.disabled= true;
                 btnnext.disabled= true;
                 img.src= "endgame.png";
                 zoneréponse.disabled= true;
   
               }
         
    })
    
  
   form.addEventListener("submit",
   (event)=>{
    event.preventDefault();
    let nom= balisenom.value;
    let email= baliseemail.value;
    console.log(nom, email)
    if(validernom(nom) && valideremail(email)){
        let scoreafficher= `${score}/${i1}`;
        affichernomemail(nom, email, scoreafficher);
    }else{console.log("error")}

   })
}
lancer()

function comptescore(score,nbproposition){
    let scorespan= document.querySelector(".score span")
    let showscore= `${score}/${nbproposition}`;
    scorespan.innerText= showscore
}