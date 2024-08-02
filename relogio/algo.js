function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()
    var relogio = document.querySelector('h1#horario')
    var mensagem = document.querySelector('div#a')
    relogio.innerHTML = `${hora}:${minutos}:${segundos}`
    if(hora >= 5 && hora < 12){
        mensagem.innerHTML = 'Bom dia'
        document.body.style.background = '#b98732'
    }else if(hora >= 12 && hora < 19){
        mensagem.innerHTML = 'Boa tarde'
        document.body.style.background = '#87861a'
    }else if(hora >= 19 && hora <24){
        mensagem.innerHTML = 'Boa noite'
        document.body.style.background = '#823f12'
    }else{
        mensagem.innerHTML = 'Boa madrugada'
    }
    
}
carregar()
setInterval(carregar,1000)