import React,{Fragment} from "react";
import SearchBox from "../searchBox/SearchBox"

const wrapper = (PrevComponent) => {
    return class extends React.Component {
        render(){
            return <Fragment>
                <SearchBox></SearchBox>
                <PrevComponent {...this.props}></PrevComponent>
            </Fragment>
        }
    }
}

export default wrapper;