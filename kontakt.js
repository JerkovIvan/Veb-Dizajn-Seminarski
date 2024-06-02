document.getElementById('kontakt-forma').addEventListener('submit', function(event) {

    var ime = document.getElementById('ime').value;
    var email = document.getElementById('email').value;
    var telefon = document.getElementById('telefon').value;
    var poruka = document.getElementById('poruka').value;

    if (ime === '' || email === '' || telefon === '' || poruka === '') {
        alert('Molimo vas da popunite sva polja.');
        return;
    }

    alert('Uspešno ste poslali poruku');

});