

import LogoClarke from '../../assets/logo.png'
import { Button, Container, Logo, MainHeader } from './styles'

export const Header = () => {
    return (
        <Container>

            <MainHeader>
                <Logo src="https://www.enel.com/etc.clientlibs/enel-common/clientlibs/clientlib-bundle/resources/img/logo/logo.svg" alt='LogoeClarke'  />
                <nav>
                    <ul>
                        <li>
                            Sobre
                        </li>
                        <li>
                            Nossas soluções
                        </li>
                        <li>
                            Mercado Livre
                        </li>
                        <li>
                            Desperdiçômetro
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>

                </nav>
                <Button>Seja nosso cliente</Button>
            </MainHeader>


        </Container>
    )
}

