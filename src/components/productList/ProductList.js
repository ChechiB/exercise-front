import React, { Fragment } from "react";
import { search } from "./service";
import ProductLine from "../productLine/ProductLine";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import wrapper from "../wrapper/Wrapper"
import './ProductList.scss'
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: {},
            items: [],
            categories:[],
            searching: false,
            error: {
                message: '',
                status: false
            }
        };
        this.renderList = this.renderList.bind(this);
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
                    this.setState({
                        searching: false,
                        error: {
                            message: 'Producto no encontrado',
                            status: true
                        }
                    })
                });
        }
        else{
            this.setState({
                error: {
                    message: 'Producto no encontrado',
                    status: true
                }
            })
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
                            searching: false,
                            error: {
                                message: '',
                                status: false
                            }
                        });
                    })
                    .catch( e => {
                        this.setState({
                            error: {
                                message: 'Ocurrió un error. Intentelo nuevamente más tarde',
                                status: true
                            }
                        })
                    });
            }
            else {
                this.setState({
                    error: {
                        message: 'Producto no encontrado',
                        status: true
                    }
                })
            }
        }
    }

    renderList(){
        if (this.state.searching){
            return <div>
                        <Spinner className="spinner-custom" animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>            
        }
        else{
            return <Fragment>
                <Row>
                    <Col sm={{ span: 10, offset: 1}}>
                        {   
                            Object.keys(this.state.categories).length > 0
                            ?<Breadcrumb key={this.state.items.id} breadcrumb={this.state.categories}></Breadcrumb>
                            :<p>No se han encontrado categorías</p>
                        }  
                    </Col>
                </Row>
                <Row noGutters>
                    <Col sm={{ span: 10, offset: 1}}>
                        <Card>
                            
                                {
                                    Object.keys(this.state.items).length > 0
                                    ?this.state.items.map(item => <ProductLine key={item.id} cod={item.id} details={item}/>)
                                    : <p>No se han encontrado productos</p>
                                }
                            
                        </Card>
                    </Col>
                </Row>
            </Fragment>            
        }
    }

    render(){
        return(
            <div className="list-container">
                <Container fluid>
                    { 
                        this.state.error.status 
                        ?<Alert variant='danger'>
                            {this.state.error.message}
                        </Alert>
                        :this.renderList()
                    }
                </Container>
            </div>
        );
    }
}

export default wrapper(ProductList);