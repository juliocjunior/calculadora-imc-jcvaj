import { useState, useEffect } from "react"
import './App.css'

function App() {

  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState(0) 
  let classificacaoIMC = "";

  const calculaIMC = () => {
    if (altura !== 0 && isNaN(altura) ==false && peso !== 0 && isNaN(peso) ==false) {
      setImc((peso/(altura*altura)).toFixed(1));
    } else {
      alert("Insira os valores de altura e peso");
    }
  }

  function classificadorIMC() {
    if (imc < 18.5) {
      document.getElementById("classAbaixo").classList.add("IMCdaPessoa")
      document.getElementById("classNormal").classList.remove("IMCdaPessoa")
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa")
      document.getElementById("classObeso").classList.remove("IMCdaPessoa")
    } else if (imc >= 18.5 && imc < 25) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa")
      document.getElementById("classNormal").classList.add("IMCdaPessoa")
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa")
      document.getElementById("classObeso").classList.remove("IMCdaPessoa")
    } else if (imc >= 25 && imc < 30) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa")
      document.getElementById("classNormal").classList.remove("IMCdaPessoa")
      document.getElementById("classSobrepeso").classList.add("IMCdaPessoa")
      document.getElementById("classObeso").classList.remove("IMCdaPessoa")
    } else if (imc >= 30) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa")
      document.getElementById("classNormal").classList.remove("IMCdaPessoa")
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa")
      document.getElementById("classObeso").classList.add("IMCdaPessoa")
    }

    function verificaInputs() {
      if (altura !== 0 && isNaN(altura) ==false && peso !== 0 && isNaN(peso) ==false) {
        classificadorIMC()
      } else {
        alert("Insira os valores de altura e peso");
      }
    }

    console.log(classificacaoIMC)
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
        calculaIMC();
        verificaInputs();
      }}>Calcular IMC</button>
        {imc ? <h2>SEU IMC É <span className='seuIMC'>{imc}</span></h2> : <h2>SEU IMC É <span className='transparente'>00.0</span></h2>}
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
          <td id="classAbaixo">
              menor que 18.5
          </td>
      </tr>
      <tr>
          <td id="classNormal">
              Normal
          </td>
          <td id="classNormal">
              Entre 18.5 e 24.9
          </td>
      </tr>
      <tr>
          <td id="classSobrepeso">
              Sobrepeso
          </td>
          <td id="classSobrepeso">
              Entre 24.9 e 30
          </td>
      </tr>
      <tr>
          <td id="classObeso">
              Obeso
          </td>
          <td id="classObeso">
              Maior que 30
          </td>
      </tr>
    </div>
  )
}

export default App
