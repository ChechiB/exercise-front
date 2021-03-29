import React from "react";
import { getProduct } from "./service";
import ProductDetail from "../productDetail/ProductDetail";
import SideBar from "../sideBar/SideBar";
import {Container, Row, Col, Card, Alert} from "react-bootstrap";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import wrapper from "../wrapper/Wrapper";
import "./ProductItem.scss";

class ProductItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: {},
            item: {},
            error: {
                message: '',
                status: false
            }
        }
        this.renderItem = this.renderItem.bind(this);
    }
    
    componentDidMount(){
        const id= this.props.match.params.id;
        let regex = new RegExp(/^([A-Z]{3}[0-9]+)$/);
        if( regex.test(id)){
            getProduct(id)
                .then(resp => {
                    this.setState({
                        author: resp.author,
                        item: resp.item,
                        error: {
                            message: '',
                            status: false
                        }
                    })
                })
                .catch(e => {
                    this.setState({
                        error: {
                            message: 'Ocurrió un error. Intentelo nuevamente más tarde',
                            status: true
                        }
                    })
                })
        }
        else{
            this.setState({
                error: {
                    message: 'Producto no encontrado',
                    status: true
                }
            })
        }
    }

    renderItem(){
        if (Object.keys(this.state.item).length > 0){
            return <div className="product-item">
                <Breadcrumb key={this.state.item.id} breadcrumb={this.state.item.breadcrumb}></Breadcrumb>
                <Card>
                    <Container>
                        <Row>
                            <Col sm={9}>
                                <ProductDetail item={this.state.item}/>
                            </Col>
                            <Col sm={3}>
                                <SideBar item={this.state.item} price={this.state.item.price}/>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </div>
        }
        else {
            return <p>No se encontraron categorías</p>;
        }
    }

    render(){
        return(
            <div className="product-item-container">
                <Container fluid>
                    <Row>
                        <Col sm={{ span: 10, offset: 1}} lg={{ span:10, offset: 1}}>
                            { 
                                this.state.error.status 
                                ?<Alert variant='danger'>
                                    {this.state.error.message}
                                </Alert>
                                :this.renderItem()
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default wrapper(ProductItem);