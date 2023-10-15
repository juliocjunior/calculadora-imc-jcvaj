function Tabela() {
  return (
    <table>
      <thead>
        <tr className="linha">
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tr>
        <td id="classAbaixo">Abaixo do peso</td>
        <td>menor que 18.5</td>
      </tr>
      <tr>
        <td id="classNormal">Normal</td>
        <td>Entre 18.5 e 24.9</td>
      </tr>
      <tr>
        <td id="classSobrepeso">Sobrepeso</td>
        <td>Entre 24.9 e 30</td>
      </tr>
      <tr>
        <td id="classObeso">Obeso</td>
        <td>Maior que 30</td>
      </tr>
    </table>
  );
}

export default Tabela;
