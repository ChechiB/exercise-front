import React from "react";
import './Breadcrumb.scss';
class Breadcrumb extends React.Component{
    render(){
        return(
            <ul className="category">
                {this.props.breadcrumb.map( (category, index) => {
                    if (index < this.props.breadcrumb.length - 1){
                        return <li className="category-item" key={category.id}>{category.name + " > "} </li>
                    }
                    return <li className="category-last-item"key={category.id}> {category.name} </li>
                })}
            </ul>
        );
    }
}

export default Breadcrumb;