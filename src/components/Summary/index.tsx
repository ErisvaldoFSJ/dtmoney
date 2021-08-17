import { Container } from "./styles";
import imgcomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas </p>
                    <img src = {imgcomeImg} alt="Entradas" />
                </header>
                <strong>R$1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas </p>
                    <img src = {outcomeImg} alt="Saidas" />
                </header>
                <strong> - R$500.00</strong>
            </div>
            <div className = "highligth-backgound">
                <header>
                    <p>Total </p>
                    <img src = {totalImg} alt="Total" />
                </header>
                <strong> R$500.00</strong>
            </div>
            
        </Container>
    )
}