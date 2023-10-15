function ButtonCalcularIMC(props) {
  return (
    <button
      className="calcularButton"
      onClick={() => {
        props.verificaInputs();
      }}>
      Calcular IMC
    </button>
  );
}

export default ButtonCalcularIMC;
