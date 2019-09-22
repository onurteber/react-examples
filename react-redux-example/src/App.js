import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <React.Fragment>
            <PostForm />
            <hr />
            <Posts />
          </React.Fragment>
        </div>
      </Provider>
    );
  }
}

export default App;
