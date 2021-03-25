import React, {Fragment} from "react";

class Breadcrumb extends React.Component{
    handlerCategory(category){
        return <li key={category.id}>{category.name}</li>
    }

    render(){
        return(
            <Fragment>
                <ul className="category">
                    {this.props.breadcrumb.map(this.handlerCategory)}
                </ul>
            </Fragment>
        );
    }
}

export default Breadcrumb;