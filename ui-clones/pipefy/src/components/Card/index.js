import { Container, Label } from './styles';

export default function Card({ data }) {
    return(
        <Container>
            <header>
                { data.labels.map((label) => {
                    return <Label color={label} key={label} />
                }) }
            </header>
            <p>{data.content}</p>
            { data.user && <img src={data.user} alt="avatar" /> }
        </Container>
    );
}
