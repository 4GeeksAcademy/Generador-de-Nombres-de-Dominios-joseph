import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ['the', 'our', 'my', 'your', 'his', 'super'];
let adj = ['great', 'big', 'fast', 'smart', 'cool', 'happy'];
let noun = ['jogger', 'racoon', 'wizard', 'rocket', 'planet', 'ninja'];
let extensions = ['.com', '.net', '.us', '.io', '.org', '.dev'];
let excuseElement = document.querySelector("#excuse");


pronoun.forEach(pron => {
  adj.forEach(adj => {
    noun.forEach(sus => {
      let nombreDeDominio = pron + adj + sus;
      extensions.forEach(ext => {
        if (sus.endsWith(ext.slice(1))) {
          console.log(pron + adj + sus.slice(0, sus.length - ext.slice(1).length) + ext);
        }
        else {
          let nombreDeDominiosConExt = nombreDeDominio + ext;
          excuseElement.innerHTML += nombreDeDominiosConExt + "<br>";
          console.log(nombreDeDominiosConExt);
        }
      })
    })
  })
})

