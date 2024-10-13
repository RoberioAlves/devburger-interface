import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container, Content } from "./style";

export function Home() {
    return (
        <main>
            <Banner>
            <h1>Olá seja bem vindo!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel />
                    <div> Carrocel Produtos</div>
                </Content>
            </Container>
        </main>
    )
}