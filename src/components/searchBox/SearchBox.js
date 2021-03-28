import React,{Fragment} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
import "./SearchBox.scss";

class SearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
        };
        this.setQuery = this.setQuery.bind(this);
        this.handlerSearch = this.handlerSearch.bind(this);
    }
    
    setQuery(event){
        this.setState({
        query: event.target.value
        })
    }
    
    handlerSearch(event){
        if (this.state.query){
        this.props.history.push({
            pathname: '/items',
            search: `?search=${this.state.query}`
        })
        }
    }

    render(){        
        return(
            <div className="search-box">
                <Container fluid>
                    <Row>
                        <Col sm={{ span: 10, offset: 1}}>
                            <input type="text" onChange={this.setQuery} value={this.state.query}/>
                            <button onClick={this.handlerSearch}>Buscar</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(SearchBox);