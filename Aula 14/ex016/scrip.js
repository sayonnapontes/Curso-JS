function contar() {
    let ini = document.getElementById('txti') // let = var 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
} else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

    if (i < f) {
        for(let c = 1; c <= f; c += p) {// Contador recebe 1, enquanto contador igual ou menor que o fim, recebe ele mesmo + o passo
            res.innerHTML += `${c} \u{1F449}` //Adicona o emoji
    } 
        res.innerHTML += `\u{1F3C1}` 
    
    } else {
        for(let c = i; c >= f; c-= p ) {
            res.innerHTML += `${c} \u{1F449}`
        }
        
        }
            res.innerHTML += `${c} \u{1F449}`

    }
}
