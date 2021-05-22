 let num1 = parseInt(prompt('digite um número.'));
 let num2 = parseInt(prompt('digite outro número'));
 let operaçao = prompt('digite um sinal de operaçao " /, *, + ou - " ')
 


 if(operaçao==="+"){
     alert(`o resultado é ${num1+num2}`)
 }

 else if(operaçao==="-"){
     alert(`o resultado é ${num1-num2}`)
 }

 else if(operaçao==="*"){
     alert(`o resultado é ${num1*num2}`)
 }
 else if(operaçao==="/"){
    alert(`o resultado é ${num1/num2}`)
 }

 else{
     alert('você não digitou um sinal válido.')
 }
