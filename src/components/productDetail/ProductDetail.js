import React from "react";
import {Card} from "react-bootstrap";

class ProductDetail extends React.Component{
    render(){
        const img = this.props.img;
        const desc = this.props.desc;

        return(
            <Card>
                <Card.Body>
                    <a href={img}></a>
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