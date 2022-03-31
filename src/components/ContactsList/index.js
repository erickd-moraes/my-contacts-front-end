import {
  Card, Container, Header, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
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
          <a href="/">
            <img src={edit} alt="Editar" />
          </a>
          <button type="button">
            <img src={trash} alt="Deletar" />
          </button>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="Editar" />
          </a>
          <button type="button">
            <img src={trash} alt="Deletar" />
          </button>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="Editar" />
          </a>
          <button type="button">
            <img src={trash} alt="Deletar" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
