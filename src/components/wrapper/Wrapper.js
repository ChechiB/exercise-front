import React from "react";
import SearchBox from "../searchBox/SearchBox"

const wrapper = (PrevComponent) => {
    return class extends React.Component {
        render(){
            return <div>
                <SearchBox></SearchBox>
                <PrevComponent {...this.props}></PrevComponent>
            </div>
        }
    }
}

export default wrapper;