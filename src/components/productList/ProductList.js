import React, { Fragment } from "react";
import { search } from "./service";
import ProductLine from "../productLine/ProductLine";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import wrapper from "../wrapper/Wrapper"
import './ProductList.scss'
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: {},
            items: [],
            categories:[],
            searching: false
        }
    }

    componentDidMount(){
        const searchStr= this.props.location.search;
        const query = searchStr.split('=')[1];
        if (query) {
            this.setState({searching: true }); 
            search(query)
                .then(resp => {
                    this.setState({
                        author: resp.author,
                        items: resp.items,
                        categories: resp.categories,
                        searching: false
                    });
                })
                .catch( e => {
                    this.setState({ searching: false });
                });
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.location.search !== prevProps.location.search ) {
            const searchStr= this.props.location.search;
            const query = searchStr.split('=')[1];
            if (query) {
                this.setState({searching: true }); 
                search(query)
                    .then(resp => {
                        this.setState({
                            author: resp.author,
                            items: resp.items,
                            categories: resp.categories,
                            searching: false
                        });
                    })
                    .catch( e => {
                        this.setState({ searching: false });
                    });
            }
        }
    }

    render(){
        return(
            <div className="list-container">
                <Container fluid>
                    { this.state.searching
                        ?<div>
                            <Spinner className="spinner-custom" animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                        :<Fragment>
                            <Row>
                                <Col sm={{ span: 10, offset: 1}}>
                                    {   
                                        Object.keys(this.state.categories).length > 0
                                        ?<Breadcrumb key={this.state.items.id} breadcrumb={this.state.categories}></Breadcrumb>
                                        :<p>No categories found</p>
                                    }  
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ span: 10, offset: 1}}>
                                    <Card>
                                        <Card.Body>
                                            {
                                                Object.keys(this.state.items).length > 0
                                                ?this.state.items.map(item => <ProductLine key={item.id} cod={item.id} details={item}/>)
                                                : <p>No items found</p>
                                            }
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Fragment>
                    }
                </Container>
            </div>
        );
    }
}

export default wrapper(ProductList);