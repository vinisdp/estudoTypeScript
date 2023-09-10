type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
}
function ligarPara(heroi: Hero) {
    console.log('ligando para: ' + heroi.telefone);
}

ligar({
    nome: 'Steve Rogers',
    vulgo: 'Capitão America',
    telefone: '14 31713388',
})