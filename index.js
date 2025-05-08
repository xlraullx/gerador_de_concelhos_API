const campoIdDoConselho = document.querySelector('.advice-id')
const campoConselho = document.querySelector('.advice-description') 
const bntConselho = document.querySelector('.advice-update')

geradorDeConselho()

bntConselho.addEventListener('click',async () => {
    geradorDeConselho()
})

async function geradorDeConselho(){
    try {
        let conselho = await gerarConselho()
        mostrarConselho(conselho)
    } catch (error) {
        campoIdDoConselho.innerText = 'ERRO'
        campoConselho.innerText = `Ocorreu um erro: ${error}`
    }
}

async function gerarConselho(){
    const url = 'https://api.adviceslip.com/advice'
    return await (await fetch(url)).json()
    
}

async function mostrarConselho(conselho){
    const idConselho = conselho.slip.id
    const textoConselho = conselho.slip.advice
    campoIdDoConselho.innerText = `advice #${idConselho}`
    campoConselho.innerText = `“${textoConselho}”`
}