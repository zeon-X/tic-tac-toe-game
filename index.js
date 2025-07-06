import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";
import store from "./redux/store/index.js";
import App from "./App.js";

AppRegistry.registerComponent("app", () => App);

const reduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(reduxApp);
