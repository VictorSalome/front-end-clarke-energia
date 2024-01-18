import { Header } from "../../components/Header"
import { Container, ContainerMain, Input, ContainerCard, ContainerText, Button } from "./styles"

import { BasicModal } from "../../components/Modal"
import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const PageHome = () => {
    const [mileage, setMileage] = useState("")
    const [open, setOpen] = useState(false);

    const onChangeMileage = (e) => {
        e.preventDefault();
        setMileage(e.target.value)
    }

    const virifyingMileage = () => {
        if (mileage > 0) {
            setOpen(true)
        } else {
            toast.warn('Insira um valor maior que zero!')

            setOpen(false)
        }
    }

    return (
        <>
            <ToastContainer />
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
                            <Button type="submit"
                                onClick={() => virifyingMileage()}
                            >cotar fornecedores</Button>
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

