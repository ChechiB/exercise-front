import React from "react";
import {Card} from "react-bootstrap";

class ProductDetail extends React.Component{
    render(){
        const { picture, desc, title } = this.props.item; 
        return(
            <Card>
                <Card.Body>
                    <img src={picture} alt={title}/>
                    <p>
                        Descripción del producto
                    </p>
                    <p>
                        {desc}
                    </p>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductDetail;