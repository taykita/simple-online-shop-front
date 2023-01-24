import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class TopPanel extends React.Component {
    render() {
        return (
        <Container fluid>
            <Row>
            <Col xs={3}>
                <Logo />
            </Col>
            <Col xs={6}>
                <MainMenu />
            </Col>
            <Col xs={3}>
                <Account />
            </Col>
            </Row>
        </Container>
        )
    }
}

export default TopPanel;
  
class MainMenu extends React.Component {
    render() {
        return (
        <ButtonGroup size="lg" className="mt-4 w-100">
            <Button as="a" variant="outline-secondary">
            Рекомендации
            </Button>
            <Button as="a" variant="outline-secondary">
            Категории
            </Button>
            <Button as="a" variant="outline-secondary">
            Акции
            </Button>
            <Button as="a" variant="outline-secondary">
            Рецепты
            </Button>
        </ButtonGroup>
        );
    }
}
  
  
class Logo extends React.Component {
    render() {
        return (
        <h2 className='mt-4 ms-4'>Онлайн магазин продуктов</h2>
        );
    }
}
  
class Account extends React.Component {
    render() {
        return (
        <div className='mt-4 mx-4 d-flex justify-content-end'>
            <Button as='a' variant='outline-secondary' className='mx-3'> 
                Корзина
            </Button>
            <Button as='a' variant='outline-secondary'> 
                Учетная запись
            </Button>
        </div>
        );
    }
}