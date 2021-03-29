import React from "react";
import { Container, Row, Col, InputGroup, FormControl, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import "./SearchBox.scss";
import logo from "../../assets/img/Logo_ML.png";
import searchLogo from "../../assets/img/ic_Search.png"

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
        event.preventDefault();
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
                        <Col className="search-box-container" sm={{ span: 10, offset: 1}}>
                            <img className="search-box-logo" src={ logo } alt="logo_ML"/>
                            <div className="search-box-group">
                                <Form onSubmit={ this.handlerSearch } >
                                    <InputGroup >
                                        <FormControl 
                                        className="search-box-input"
                                        placeholder="Nunca dejes de buscar"
                                        aria-label="Nunca dejes de buscar"
                                        aria-describedby="basic-addon2"
                                        onChange={this.setQuery} 
                                        value={this.state.query}
                                        />
                                        <InputGroup.Append>
                                            <button className="search-box-btn" type="submit">
                                                <img src={searchLogo} alt="searchLogo"/>
                                            </button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(SearchBox);