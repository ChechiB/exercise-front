import React,{Fragment} from "react";
import { withRouter } from "react-router";

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
            <Fragment>
                <input type="text" onChange={this.setQuery} value={this.state.query}/>
                <button onClick={this.handlerSearch}>Buscar</button>
            </Fragment>
        );
    }
}

export default withRouter(SearchBox);