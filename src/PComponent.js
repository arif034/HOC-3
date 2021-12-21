import { Component } from "react";
import HOCComponent from "./HOCComponent";
class PComponent extends Component {
  render() {
    const passedName = this.props.name;
    return <div>Hello {passedName}</div>;
  }
}

export default HOCComponent(PComponent);
