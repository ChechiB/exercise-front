import React from "react";
import { getProduct } from "./service";
import ProductDetail from "../productDetail/ProductDetail";
import SideBar from "../sideBar/SideBar";
import {Container, Row, Col} from "react-bootstrap";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import wrapper from "../wrapper/Wrapper"
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
            <Container>
                <Row>
                    <Col sm={{ span: 10, offset: 1}}>
                        {
                            Object.keys(this.state.item).length > 0 
                            ?<div className="product-item">
                                <div className="breadcrumb">
                                    <Breadcrumb key={this.state.item.id} breadcrumb={this.state.item.breadcrumb}></Breadcrumb>      
                                </div>
                                <ProductDetail item={this.state.item} ></ProductDetail>
                                <SideBar item={this.state.item} price={this.state.item.price}></SideBar>
                            </div>
                            :<p>No categories found</p>
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default wrapper(ProductItem);