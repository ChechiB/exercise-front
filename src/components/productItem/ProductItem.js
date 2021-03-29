import React from "react";
import { getProduct } from "./service";
import ProductDetail from "../productDetail/ProductDetail";
import SideBar from "../sideBar/SideBar";
import {Container, Row, Col, Card} from "react-bootstrap";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import wrapper from "../wrapper/Wrapper";
import "./ProductItem.scss";

class ProductItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: {},
            item: {}
        }
    }
    
    componentDidMount(){
        //Validate id
        const id= this.props.match.params.id;
        getProduct(id).then(resp => {
            this.setState({
                author: resp.author,
                item: resp.item
            })
        })
    }

    render(){
        return(
            <div className="product-item-container">
                <Container fluid>
                    <Row>
                        <Col sm={{ span: 10, offset: 1}} lg={{ span:9, offset: 1}}>
                            {
                                Object.keys(this.state.item).length > 0 
                                ?<div className="product-item">
                                    <div className="breadcrumb">
                                        <Breadcrumb key={this.state.item.id} breadcrumb={this.state.item.breadcrumb}></Breadcrumb>      
                                    </div>
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
                                :<p>No categories found</p>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default wrapper(ProductItem);