import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import './ProductLine.scss';
import ShippingLogo from "../../assets/img/ic_shipping.png";
import { formatDecimal } from "../../utils/utils";

class ProductLine extends React.Component{
    constructor(props){
        super(props);
        this.handlerProduct = this.handlerProduct.bind(this);
}

    handlerProduct(event){
        if (this.props.cod){
            this.props.history.push({
                pathname: `/items/${this.props.cod}`
            })
        }
    }

    

    render(){
        const { picture, title, price, free_shipping, condition } = this.props.details;
        return <Container>
            <Row>
                <Col sm={8} className="product-line-container">
                    <img className="product-img" src={picture} alt={title} onClick={this.handlerProduct}/>
                    <div className="product-text">
                        <div className="product-wrapper">
                            <div className="product-price">
                                <span> $ </span>
                                <span className="product-amount">
                                    {price.amount}
                                </span>
                                <span className="product-decimals">
                                    <sup>{ formatDecimal(price.decimals) }</sup> 
                                </span>
                            </div>
                            {
                                free_shipping
                                ?<img className="shipping-img" src={ShippingLogo}/>
                                :null
                            }
                        </div>
                        <div className="product-title" onClick={this.handlerProduct}>
                            <span >
                                {title}
                            </span>
                        </div>
                    </div>
                </Col>
                <Col className="product-city">
                    <p>{}</p>
                </Col>
            </Row>

        </Container>
    };
}

export default withRouter(ProductLine);