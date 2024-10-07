let dolar = 5.5

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () =>{
//formatando o que o usuário está digitando
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () =>{
//formatando o que o usuário está digitando
convert("brl-to-usd")
})

usdInput.addEventListener("blur", () =>{
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "0,00"
convert("usd-to-brl")

//funções
function formatCurrency(value){
    //ajustar o valor
    let fixedValue = fixValue(value)
    //ultilizar função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    //retornar o valor formatado
    return formatter.format(fixedValue)
}

function fixValue(value){
    //               trocar a vírgula pelo ponto
    let fixedValue = value.replace(",", ".")
    //               transformar o valor da string em um número de fato.
    let floatValue = parseFloat(fixedValue)
    // se o usuário digitar algo que não seja um número, o valor será 0
    if(floatValue == NaN){
        floatValue = 0
    }
    return floatValue
}

function convert(type){
    if(type == "usd-to-brl"){
        //ajustar o valor
        let fixedValue = fixValue(usdInput.value)
        //converter o valor
        let result = fixedValue * dolar
        //pega os decimais desse valor e fixe ele em 2 decimais
        result = result.toFixed(2)
        //mostrar o resultado no campo do real
        brlInput.value = formatCurrency(result)
    }

    if(type == "brl-to-usd"){
        //ajustar o valor
        let fixedValue = fixValue(brlInput.value)
        //converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)
        //mostrar o resultado no campo do dolar
        usdInput.value = formatCurrency(result)
    }
}