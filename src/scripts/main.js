document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        const numeroUm = parseFloat(document.getElementById('numero-um').value);
        const numeroDois = parseFloat(document.getElementById('numero-dois').value);
        numeroResultado = numeroUm + numeroDois;
        
        document.getElementById('resultado-valor').innerText = numeroResultado;
    })
})