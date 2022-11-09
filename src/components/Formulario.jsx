import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectedMonedas from "../hooks/useSelectedMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {

  const [criptos, setCriptos] = useState([])

  //nuestra lista de monedas se lo pasamos a nuestro hook
  const [moneda, SelectMonedas] = useSelectedMonedas("Elije tu moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectedMonedas("Elije tu Criptomonedas", criptos);
  

  //Hacemos una consulta a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      // formateamos nuestra respuesta para visualizarla en formato json
      const resultado = await respuesta.json();
      //creamos nuestro arreglo con map
      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
      
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  SelectMonedas();

  return (
    <form>
      <SelectMonedas />

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
