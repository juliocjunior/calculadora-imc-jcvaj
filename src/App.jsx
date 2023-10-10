import { useState, useEffect } from "react"
import './App.css'

function App() {

  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState(0) 
  const [imc2, setImc2] = useState(0) 
  let classificacaoIMC = "";

  function calculaIMC() {
    setImc((peso/(altura*altura)).toFixed(1));
  }

  function calculaIMC2() {
    setImc2((peso/(altura*altura)).toFixed(1));
  }
  
  useEffect(() => {
    calculaIMC2();
  });

  function classificadorIMC() {
    if (imc2 < 18.5) {
      document.getElementById("classAbaixo").classList.add("IMCdaPessoa")
      document.getElementById("classNormal").classList.remove("IMCdaPessoa")
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa")
      document.getElementById("classObeso").classList.remove("IMCdaPessoa")
    } else if (imc2 >= 18.5 && imc2 < 25) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa")
      document.getElementById("classNormal").classList.add("IMCdaPessoa")
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa")
      document.getElementById("classObeso").classList.remove("IMCdaPessoa")
    } else if (imc2 >= 25 && imc2 < 30) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa")
      document.getElementById("classNormal").classList.remove("IMCdaPessoa")
      document.getElementById("classSobrepeso").classList.add("IMCdaPessoa")
      document.getElementById("classObeso").classList.remove("IMCdaPessoa")
    } else if (imc2 >= 30) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa")
      document.getElementById("classNormal").classList.remove("IMCdaPessoa")
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa")
      document.getElementById("classObeso").classList.add("IMCdaPessoa")
    }
    console.log(classificacaoIMC)
  }
  
  function verificaInputs() {
    if (altura !== 0 && isNaN(altura) ==false && peso !== 0 && isNaN(peso) ==false) {
      calculaIMC();
      classificadorIMC();
    } else {
      alert("Insira os valores de altura e peso");
    }
  }
  
  return (
    <div className='container'>
      <h1>Calculadora de IMC</h1>
      <form>
        <p className='nomeDosInputs'>Sua altura:</p>
        <p className='dica'>*use o ponto(0.0)</p>
        <p></p>
        <input onChange={e => setAltura(parseFloat(e.target.value))} type='number' placeholder='Ex: 1.70'/>
        <p className='nomeDosInputs'>Seu peso:</p>
        <p className='dica'>*apenas o número em kg</p>
        <input onChange={e => setPeso(parseFloat(e.target.value))} type='number' placeholder='Ex: 70'/>
      </form>
      <div className='botao-e-resultado'>
      <button className="calcularButton" onClick={() => {
        verificaInputs();
      }}>Calcular IMC</button>
        {imc ? <h2>SEU IMC É <span id="seuIMC" className='seuIMC'>{imc}</span></h2> : <h2>SEU IMC É <span className='transparente'>00.0</span></h2>}
      </div>
      <thead>
          <tr className='linha'>
              <th>
                  Classificação
              </th>
              <th>
                  IMC
              </th>
          </tr>
      </thead>
      <tr>
          <td id="classAbaixo">
              Abaixo do peso
          </td>
          <td>
              menor que 18.5
          </td>
      </tr>
      <tr>
          <td id="classNormal">
              Normal
          </td>
          <td>
              Entre 18.5 e 24.9
          </td>
      </tr>
      <tr>
          <td id="classSobrepeso">
              Sobrepeso
          </td>
          <td>
              Entre 24.9 e 30
          </td>
      </tr>
      <tr>
          <td id="classObeso">
              Obeso
          </td>
          <td>
              Maior que 30
          </td>
      </tr>
    </div>
  )
}

export default App
