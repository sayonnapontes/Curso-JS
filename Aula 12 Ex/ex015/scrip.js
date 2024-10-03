function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // f de formulário
    var res = document.getElementById('res')

    if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criançamasculino.jpg')

            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemmasculino')

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adultomasculino')
                
            } else {
                // idoso
                img.setAttribute('src', 'adultomasculino')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criançfeminino.jpg')

            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemmasculino')

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adultomasculino')

            } else {
                // idoso
                img.setAttribute('src', 'adultomasculino')

            }
        }
    
}
}

