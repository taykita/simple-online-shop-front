import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MainArea extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <SideMenu />
                    </Col>
                    <Col xs={9}>
                        <ProductArea />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default MainArea;

class SideMenu extends React.Component {
    render() {
        return (
            <div className='border'>
                Сортировка:
                <br></br>
                1
                <br></br>
                2
                <br></br>
                3
                <br></br>
                4
                <br></br>
                5
            </div>
        )
    }
}

class ProductArea extends React.Component {
    render() {
        return (
            <div>
                Продукты
            </div>
        )
    }
}
  