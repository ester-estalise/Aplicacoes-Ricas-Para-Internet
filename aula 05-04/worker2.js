addEventListener('message', function(event){
    const  inputNumber2 = event.data
    //tem q ser let pq o valor n pode ser mudado
    let fatorial = 1
    for(let i=1; i<=inputNumber2;i++){
      fatorial *= i
    }
      postMessage(fatorial)
})
