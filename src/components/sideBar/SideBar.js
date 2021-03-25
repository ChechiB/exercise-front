import React,{Fragment} from "react";

class SideBar extends React.Component{
    render(){
        return <Fragment>
            <p>SideBar</p>
            <p>{this.props.item.condition}</p>
            <p>{this.props.item.sold_quantity}</p>
            <p>{this.props.item.price.amount}</p>
            <p>{this.props.item.price.decimals}</p>
            <p>{this.props.item.price.currency}</p>
            <button>Comprar</button>
        </Fragment>
    };
}

export default SideBar;