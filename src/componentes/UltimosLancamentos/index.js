import {livros} from './dadosUltimosLancamentos'
import styled from 'styled-components';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display:flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function UltimosLancamentos(){
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px" 
                alinhamento="center" >ULTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img key={livro.id} src={livro.src} alt={livro.nome} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação integrada com a plataforma Google"
                img={imagemLivro}
            />
            <CardRecomenda
                titulo="Talvez você seja feliz no Alura"
                subtitulo="Angular 12"
                descricao="Construindo"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>

    );
};

export default UltimosLancamentos;