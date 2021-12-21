import { Component } from "react";

const HOCComponent = (InputComponent) => {
  class OutputComponent extends Component {
    render() {
      return <InputComponent name="Arif" />;
    }
  }
  return OutputComponent;
};

export default HOCComponent;
