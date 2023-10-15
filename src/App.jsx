import "./App.css";
import { useState, useEffect } from "react";
import InputsAlturaPeso from "./components/InputsAlturaPeso";
import ButtonCalcularIMC from "./components/ButtonCalcularIMC";
import SeuIMC from "./components/SeuIMC";
import Tabela from "./components/Tabela";

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(0);
  const [imc2, setImc2] = useState(0);

  function calculaIMC() {
    setImc((peso / (altura * altura)).toFixed(1));
  }

  function calculaIMC2() {
    setImc2((peso / (altura * altura)).toFixed(1));
  }

  useEffect(() => {
    calculaIMC2();
  });

  function classificadorIMC() {
    if (imc2 < 18.5) {
      document.getElementById("classAbaixo").classList.add("IMCdaPessoa");
      document.getElementById("classNormal").classList.remove("IMCdaPessoa");
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa");
      document.getElementById("classObeso").classList.remove("IMCdaPessoa");
    } else if (imc2 >= 18.5 && imc2 < 25) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa");
      document.getElementById("classNormal").classList.add("IMCdaPessoa");
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa");
      document.getElementById("classObeso").classList.remove("IMCdaPessoa");
    } else if (imc2 >= 25 && imc2 < 30) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa");
      document.getElementById("classNormal").classList.remove("IMCdaPessoa");
      document.getElementById("classSobrepeso").classList.add("IMCdaPessoa");
      document.getElementById("classObeso").classList.remove("IMCdaPessoa");
    } else if (imc2 >= 30) {
      document.getElementById("classAbaixo").classList.remove("IMCdaPessoa");
      document.getElementById("classNormal").classList.remove("IMCdaPessoa");
      document.getElementById("classSobrepeso").classList.remove("IMCdaPessoa");
      document.getElementById("classObeso").classList.add("IMCdaPessoa");
    }
  }

  function verificaInputs() {
    if (
      altura !== 0 &&
      isNaN(altura) == false &&
      peso !== 0 &&
      isNaN(peso) == false
    ) {
      calculaIMC();
      classificadorIMC();
    } else {
      alert("Insira os valores de altura e peso");
    }
  }
  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <InputsAlturaPeso setAltura={setAltura} setPeso={setPeso} />
      <div className="botao-e-resultado">
        <ButtonCalcularIMC
          verificaInputs={verificaInputs}
          altura={altura}
          peso={peso}
        />
        <SeuIMC imc={imc} />
      </div>
      <Tabela />
    </div>
  );
}

export default App;
