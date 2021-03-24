import React, {Fragment} from "react";
import wrapper from "./components/wrapper/Wrapper"
class App extends React.Component{
  

  render() {
    
    return(
        <Fragment>
          <p>APP</p>
        </Fragment>
      )
  };
}

export default wrapper(App);
