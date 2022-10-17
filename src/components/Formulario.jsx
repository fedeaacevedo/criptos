import { useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectedMonedas from '../hooks/useSelectedMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`


const Formulario = () => {

 

  //nuestra lista de monedas se lo pasamos a nuestro hook
  const [ SelectMonedas ] = useSelectedMonedas('Elije tu moneda', monedas)

  //Hacemos una consulta a la API
  useEffect( () => {
    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const respuesta = await fetch(url)
      // formateamos nuestra respuesta para visualizarla en formato json
      const resultado = await respuesta.json()
      console.log(resultado)
    }
    consultarAPI();
  }, [])

  SelectMonedas()

  return (
    <form>
      
      <SelectMonedas />


        <InputSubmit 
            type="submit" 
            value="Cotizar" 
        />
    </form>
  )
}

export default Formulario