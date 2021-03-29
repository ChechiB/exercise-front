import React, { Fragment } from "react";
import './ProductDetail.scss';

class ProductDetail extends React.Component{
    render(){
        const { picture, description, title } = this.props.item; 
        return(
            <Fragment>
                    <img className="product-detail-img" src={picture} alt={title}/>
                    <p className="product-detail-title">
                        Descripción del producto
                    </p>
                    <p className="product-detail-text">
                        {description}
                    </p>
            </Fragment>
                
        );
    }
}

export default ProductDetail;