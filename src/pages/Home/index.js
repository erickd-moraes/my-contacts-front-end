import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import Modal from '../../components/Modal';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <Modal danger />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Seta" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Érick Moraes</strong>
            <small>instagram</small>
          </div>
          <span>erickd.moraes@gmail.com</span>
          <span>(15) 99999-9999</span>
        </div>

        <div className="actions">
          <Link to="/edit/123">
            <img src={edit} alt="Editar" />
          </Link>
          <button type="button">
            <img src={trash} alt="Deletar" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
