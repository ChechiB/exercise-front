import React,{Fragment} from "react";
import "./SideBar.scss";
import { formatDecimal } from "../../utils/utils";

class SideBar extends React.Component{
    render(){
        const { sold_quantity, condition, title } = this.props.item;
        const { amount, decimals, currency } = this.props.item.price;
        return <Fragment>
            <p className="side-bar-condition">{condition.charAt(0).toUpperCase() + condition.slice(1, condition.length)} - {sold_quantity} vendidos</p>
            <p className="side-bar-title">{title}</p>
            <p className="side-bar-price">
                {amount} 
                <span className="side-bar-decimals">
                    <sup>{formatDecimal(decimals)}</sup>
                </span> 
                {currency}
            </p>
            <button className="side-bar-button">Comprar</button>
        </Fragment>
    };
}

export default SideBar;