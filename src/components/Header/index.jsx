

import LogoClarke from '../../assets/logo.png'
import { Button, Container, Logo, MainHeader } from './styles'

export const Header = () => {
    return (
        <Container>
            <Logo src={LogoClarke} alt='LogoeClarke' />
            <MainHeader>
                <h3>Sobre nós</h3>
                <h3>Nossas soluções</h3>
                <h3>Mercado Livre</h3>
                <h3>Desperdiçômetro</h3>
                <h3>Blog</h3>
            </MainHeader>

            <Button>Seja nosso cliente</Button>
        </Container>
    )
}

