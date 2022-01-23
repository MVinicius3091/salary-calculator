/* 
1- Saber quanto o usuário ganha por mês.
2- Saber quantas horas o usuário trabalha por mês.
3- Dividir o salário pelas horas trabalhadas.
4- Dividir o resultado das divisão entre salário/horas e dividir por 60 min.
5- Multipilcar o resultado pelo números de horas inserida pelo usuário.
*/

// document.addEventListener('')

let buttons = document.querySelectorAll('button');


buttons[0].addEventListener('click', ()=>{
  salarioPorDia();  
})

buttons[1].addEventListener("click", ()=>{
  horasExtras();

  let total = document.querySelector('.total');
  let resultadoDasHorasExtra = document.querySelector('.extra').textContent;
  let salario = document.querySelector("#salario").value

  total.innerHTML = parseInt(salario) + parseInt(resultadoDasHorasExtra);

});

buttons[2].addEventListener('click', ()=>{
  document.querySelector("#horas").value = '';
  document.querySelector("#salario").value = '';
  document.querySelector('#horas_extras').value = '';
  document.querySelector('.result').innerHTML = '';
  document.querySelector('.extra').innerHTML = '';
  document.querySelector('.total').innerHTML = '';
})

function salarioPorDia(){
  let horasTrabalhadas = document.querySelector("#horas").value;
  let inputSalario = document.querySelector("#salario").value;
  var resultado = document.querySelector('.result');

  if(horasTrabalhadas == ''){
    alert('Preencha o campo vazio!');
  }else if(inputSalario == ''){
    alert('Preencha o campo vazio!');
  }else{
    let consulta = inputSalario / horasTrabalhadas;
    
    resultado.innerHTML = consulta.toString().substring(0, 4);
  }


};

function horasExtras(){
  let resultado = document.querySelector('.result');
  let inputHoras = document.querySelector('#horas_extras').value;
  let resultadoDasHorasExtra = document.querySelector('.extra');

  if(inputHoras == ''){
    alert("Preencha o campo vazio!")
  }else{
    let consulta = inputHoras * resultado.textContent;
    resultadoDasHorasExtra.innerHTML = consulta.toString().substring(0, 4);
  }
}
