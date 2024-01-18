import { Header } from "../../components/Header"
import { Container, ContainerMain, Input, ContainerCard, ContainerText } from "./styles"

import { BasicModal } from "../../components/Modal"
import { useState } from "react"


export const PageHome = () => {
    const [mileage, setMileage] = useState("")
    const [open, setOpen] = useState(false);


    const onChangeMileage = (e) => {
        e.preventDefault();
        setMileage(e.target.value)
    }

    console.log('Teste', mileage)
    const virifyingMileage = () => {
        if (mileage > 0) {
            setOpen(true)
        } else {
            alert('Insira um valor maior que 0')
            setOpen(false)
        }
    }

    return (
        <>
            <Header />
            <Container
                img={`https://clarke.com.br/wp-content/uploads/2022/12/energia-eolica00.png`}
            >
                <ContainerText>
                    <div>
                        <p>
                            #ofuturoélivre
                        </p>
                    </div>
                    <div>
                        <h1>
                            Economize até 40% na conta de luz da sua empresa sem precisar investir
                        </h1>
                    </div>
                    <div>
                        <p>
                            Se o seu negócio gasta mais de R$ 10 mil por mês com energia, a Clarke pode te ajudar a economizar com o Mercado Livre de Energia.
                        </p>
                    </div>
                </ContainerText>
                <ContainerMain>
                    <ContainerCard>
                        <h2>Informe seu consumo mensal de gasto de luz em kwh!</h2>
                        <div>
                            <Input type="number"
                                placeholder="insira seu consumo, ex: 3000kwh"
                                onChange={onChangeMileage}
                                value={mileage}
                            />
                        </div>
                        <div>
                            <button type="submit"
                                onClick={() => virifyingMileage()}
                            >cotar fornecedores</button>
                        </div>

                        <div>
                            <BasicModal setOpen={setOpen} open={open} mileage={mileage} />
                        </div>
                    </ContainerCard>

                </ContainerMain>


            </Container>
        </>


    )
}

