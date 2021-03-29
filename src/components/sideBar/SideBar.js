import React,{Fragment} from "react";
import "./SideBar.scss";
import { formatDecimal, getSymbol, getStatus } from "../../utils/utils";

class SideBar extends React.Component{
    render(){
        const { sold_quantity, condition, title } = this.props.item;
        const { amount, decimals, currency } = this.props.item.price;
        const conditionSpa = getStatus(condition);
        return <Fragment>
            <p className="side-bar-condition">{conditionSpa.charAt(0).toUpperCase() + conditionSpa.slice(1, conditionSpa.length)} - {sold_quantity} vendidos</p>
            <p className="side-bar-title">{title}</p>
            <p className="side-bar-price">
                {getSymbol(currency)}
                {amount} 
                <span className="side-bar-decimals">
                    <sup>{formatDecimal(decimals)}</sup>
                </span> 
            </p>
            <button className="side-bar-button">Comprar</button>
        </Fragment>
    };
}

export default SideBar;