import { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {

    const ref = useRef();
    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'CARD',
        item: { index, content: data.content, listIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = ((targetSize.bottom - targetSize.top) / 2);

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = (draggedOffset.y - targetSize.top);

            // In the video, it was like this, but I decided to go for nested conditions
            // if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
            //     return;
            // } else if (draggedIndex < targetIndex && draggedTop < targetCenter) {
            //     return;
            // } else if (draggedIndex > targetIndex && draggedTop > targetCenter) {
            //     return;
            // }
            // console.log(draggedTop);

            if (draggedIndex !== targetIndex || draggedListIndex !== targetListIndex) {
                if (draggedIndex >= targetIndex || draggedTop >= targetCenter) {
                    if (draggedIndex <= targetIndex || draggedTop <= targetCenter) {
                        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

                        item.index = targetIndex;
                        item.listIndex = targetListIndex;
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            } else {
                return;
            }

        }
    });

    dragRef(dropRef(ref));

    return(
        <Container ref={ref} isDragging={isDragging}>
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
