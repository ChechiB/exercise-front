import React, { Fragment } from "react";
import { search } from "../../utils/apiCalls";
import ProductLine from "../productLine/ProductLine";
import Breadcrumb from "../breadcrumb/Breadcrumb";

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: {},
            items: [],
            categories:[]
        }
    }

    componentDidMount(){
        //Validate search and query
        const searchStr= this.props.location.search;
        const query = searchStr.split('=')[1];
        search(query)
            .then(resp => {
                console.log('search', resp);
                this.setState({
                    author: resp.author,
                    items: resp.items,
                    categories: resp.categories
                });
            })
    }

    render(){
        return(
            <Fragment>
                <div className="breadcrumb">
                    {   
                        Object.keys(this.state.categories).length > 0
                        ?<Breadcrumb key={this.state.items.id} breadcrumb={this.state.categories}></Breadcrumb>
                        :<p>No categories found</p>
                    }           
                </div>
                <div className="products">   
                    {
                        Object.keys(this.state.items).length > 0
                            ? this.state.items.map(item => <ProductLine key={item.id} cod={item.id} details={item}/>)
                            : <p>No items found</p>
                    }
                </div>
            </Fragment>
        );
    }
}

export default ProductList;