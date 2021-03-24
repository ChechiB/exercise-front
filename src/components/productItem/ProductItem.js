import React from "react";
import { getProduct } from "./service";
import ProductDetail from "../productDetail/ProductDetail";
import SideBar from "../sideBar/SideBar";
import {Card} from "react-bootstrap";
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
            <Card>
                <Card.Body>
                    <p>PRODUCT ITEM</p>
                    <div className="breadcrumb">
                        {   
                            Object.keys(this.state.item).length > 0
                            ?<Breadcrumb key={this.state.item.id} breadcrumb={this.state.item.breadcrumb}></Breadcrumb>
                            :<p>No categories found</p>
                        }           
                    </div>
                    <ProductDetail item={this.state.item} ></ProductDetail>
                    <SideBar item={this.state.item} ></SideBar>
                </Card.Body>
            </Card>
        );
    }
}

export default wrapper(ProductItem);