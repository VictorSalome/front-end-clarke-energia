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
            <Container img={`https://clarke.com.br/wp-content/uploads/2022/12/energia-eolica00.png`}>
                <ContainerText>
                        <p>#ofuturoélivre</p>
                        <h1>Economize até 40% na conta de luz da sua empresa sem precisar investir</h1>
                        <p>Se o seu negócio gasta mais de R$ 10 mil por mês com energia, a Enel pode te ajudar a economizar com o Mercado Livre de Energia.</p>
                </ContainerText>
                <ContainerMain>
                    <ContainerCard>
                        <h2>Informe seu consumo mensal de gasto de luz em kwh!</h2>
                        <Input 
                            type="number"
                            placeholder="insira seu consumo, ex: 3000kwh"
                            onChange={onChangeMileage}
                            value={mileage}
                        />

                        <Button
                            type="submit"
                            onClick={() => virifyingMileage()}
                        >Cotar Fornecedores</Button>
                        <BasicModal
                         setOpen={setOpen} 
                         open={open} 
                         mileage={mileage}
                        />
                    </ContainerCard>
                </ContainerMain>
            </Container>
        </>
    )
}

