import { Container, Label } from './styles';
import { useDrag } from 'react-dnd';

export default function Card({ data }) {

    const [{ isDragging }, dragRef] = useDrag({
        type: 'CARD',
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return(
        <Container ref={dragRef} isDragging={isDragging}>
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
