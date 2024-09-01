function verificarLetraA(str) {
    let contador = 0;
    str = str.toLowerCase()
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            contador++;
        }
    }

    if (contador > 0) {
        return `A letra 'a' (maiúscula ou minúscula) aparece ${contador} vezes na string.`;
    } else {
        return `A letra 'a' (maiúscula ou minúscula) não foi encontrada na string.`;
    }
}

let texto = "Lista";
console.log(verificarLetraA(texto));