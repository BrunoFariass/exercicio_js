const form = document.getElementById('form-campos');

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();

const primeiroCampo = document.getElementById('campo-a').value;
const segundoCampo = document.getElementById('campo-b').value;

if (primeiroCampo == segundoCampo) {
    alert('Os campos possuem o mesmo valor. Por Favor digite um valor diferente:');
} else if (primeiroCampo > segundoCampo) {
    alert('O campo A é maior que B!');
} else { (segundoCampo > primeiroCampo); 
    alert('O campo B é maior que A!')
}


})


console.log(form);
