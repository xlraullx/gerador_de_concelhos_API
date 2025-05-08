const campoIdDoConselho = document.querySelector('.advice-id')
const campoConselho = document.querySelector('.advice-description') 
const bntConselho = document.querySelector('.advice-update')

gerarConselho()

bntConselho.addEventListener('click',async () => {
    gerarConselho()
})

async function gerarConselho(){
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        if(!response.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const conselho = await response.json()
        mostrarConselho(conselho)

    } catch (error) {
        campoIdDoConselho.innerText = 'ERRO'
        campoConselho.innerText = `Ocorreu um erro: ${error}`
    }
}

async function mostrarConselho(conselho){
    const idConselho = conselho.slip.id
    const textoConselho = conselho.slip.advice
    campoIdDoConselho.innerText = `advice #${idConselho}`
    campoConselho.innerText = `“${textoConselho}”`
}