import React, {Fragment} from "react";
import './Breadcrumb.scss';
class Breadcrumb extends React.Component{
    handlerCategory(category){
        return <li key={category.id}> {category.name} </li>
    }

    render(){
        return(
            <div className="nav">
                <ul className="category">
                    {this.props.breadcrumb.map(this.handlerCategory)}
                </ul>
            </div>
        );
    }
}

export default Breadcrumb;