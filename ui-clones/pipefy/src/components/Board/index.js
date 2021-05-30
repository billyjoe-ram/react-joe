import { Container } from './styles';

import { loadLists } from '../../services/api';

import List from '../List';

const lists = loadLists();

export default function Board() {
    return(
        <Container>
            {lists.map((list) => {
                return <List key={list.title} data={list} />
            })}
        </Container>
    );
}
