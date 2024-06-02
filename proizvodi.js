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









// Pronalazi sve dugmad sa klasom "kupi-dugme"
var KupiDugme = document.querySelectorAll('.kupi-dugme');

// Provera da li su pronađena dugmad
console.log("Broj pronađenih dugmadi: " + KupiDugme.length);

// Iterira kroz svako dugme i dodaje event listener za klik
KupiDugme.forEach(function(dugme) {
    dugme.addEventListener('click', function() {
        // Provera da li se JavaScript kod izvršava kada se klikne na dugme
        console.log("Kliknuto je na dugme.");

        // Pronalazi roditelja dugmeta kako bi pronašao poruku o uspehu
        var predmet = dugme.closest('.predmet');
        var UspesnaPoruka = predmet.querySelector('.UspesnaPoruka');

        // Provera da li je poruka o uspehu pronađena
        console.log("Poruka o uspehu pronađena: " + (UspesnaPoruka !== null));

        // Prikazuje poruku "Uspešno ste kupili"
        UspesnaPoruka.style.display = 'block';

        // Sakriva poruku nakon 3 sekunde
        setTimeout(function() {
            UspesnaPoruka.style.display = 'none';
        }, 3000);
    });
});