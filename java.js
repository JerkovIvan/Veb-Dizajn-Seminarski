const HamburgerMeni = document.querySelector(".HamburgerMeni");
const NavigacioniMeni = document.querySelector(".NavigacioniMeni");

HamburgerMeni.addEventListener("click", () => {
    HamburgerMeni.classList.toggle("aktiviraj");
    NavigacioniMeni.classList.toggle("aktiviraj");
})

document.querySelectorAll(".NavigacioniLink").forEach(n => n.addEventListener("click", () =>{
    HamburgerMeni.classList.remove("aktiviraj");
    NavigacioniMeni.classList.remove("aktiviraj");
}))

//pokretna galerija

const prelazak = document.querySelectorAll(".prelazak");
const prethodna = document.querySelector(".prethodna");
const sledeca = document.querySelector(".sledeca");
let TrenutnaSlika = 0;

function PrikaziSlajd(oznaka) {
    prelazak.forEach(slide => {
        slide.style.display = "none";
    });

    prelazak[oznaka].style.display = "block";
}

PrikaziSlajd(TrenutnaSlika);

function SlajdLevo() {
    TrenutnaSlika--;
    if (TrenutnaSlika < 0) {
        TrenutnaSlika = prelazak.length - 1;
    }
    PrikaziSlajd(TrenutnaSlika);
}

function SlajdDesno() {
    TrenutnaSlika++;
    if (TrenutnaSlika >= prelazak.length) {
        TrenutnaSlika = 0;
    }
    PrikaziSlajd(TrenutnaSlika);
}

prethodna.addEventListener("click", SlajdLevo);
sledeca.addEventListener("click", SlajdDesno);




  
  



  




