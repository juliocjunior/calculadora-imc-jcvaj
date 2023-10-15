function InputsAlturaPeso(props) {
  return (
    <form>
      <p className="nomeDosInputs">Sua altura:</p>
      <p className="dica">*use o ponto(0.0)</p>
      <p></p>
      <input
        onChange={(e) => props.setAltura(parseFloat(e.target.value))}
        type="number"
        placeholder="Ex: 1.70"
      />
      <p className="nomeDosInputs">Seu peso:</p>
      <p className="dica">*apenas o número em kg</p>
      <input
        onChange={(e) => props.setPeso(parseFloat(e.target.value))}
        type="number"
        placeholder="Ex: 70"
      />
    </form>
  );
}

export default InputsAlturaPeso;
