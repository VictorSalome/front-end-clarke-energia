import { Header } from "../../components/Header"
import { Container, ContainerMain, Input, ContainerCard, ContainerText } from "./styles"

import { BasicModal } from "../../components/Modal"




export const PageHome = () => {


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
                            <Input type="text"
                                placeholder="Consumo mensal em KWH"
                                onChange={(e) => (e.target.value)}


                            />
                        </div>
                        <div>
                            <BasicModal />
                        </div>
                    </ContainerCard>

                </ContainerMain>


            </Container>
        </>


    )
}

