import { useEffect } from "react"
import { Container } from "./styles"
import {api} from "../../services/api"


export function TransactionsTable(){
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>   
                <tbody>
                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdown">-R$1.100</td>
                        <td>CASA</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}