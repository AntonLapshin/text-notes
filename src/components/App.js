import { React } from "react";
import { Provider } from "react-redux";

class App extends React.Component {
  // static propTypes = {
  //   store: PropTypes.object.isRequired
  // };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: "100%" }}>
          <p>App works</p>
        </div>
      </Provider>
    );
  }
}
