import React,{Fragment} from "react";
import {Card} from "react-bootstrap";
import { withRouter } from "react-router";
import Breadcrumb from "../breadcrumb/Breadcrumb";

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
        return <Fragment>
            <Card>
                <Card.Body>
                    <p onClick={this.handlerProduct}>{this.props.details.title}</p>
                    <p>{this.props.cod}</p>

                </Card.Body>
            </Card>
        </Fragment>
    };
}

export default withRouter(ProductLine);