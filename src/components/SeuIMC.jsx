function SeuIMC(props) {
  return props.imc ? (
    <h2>
      SEU IMC É{" "}
      <span id="seuIMC" className="seuIMC">
        {props.imc}
      </span>
    </h2>
  ) : (
    <h2>
      SEU IMC É <span className="transparente">00.0</span>
    </h2>
  );
}
export default SeuIMC;
