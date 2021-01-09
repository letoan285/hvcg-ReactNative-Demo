import React from "react";
import AppContainer from "./AppContainer";
import {Provider} from 'react-redux';
import { configureStore } from "./app/presentation/redux/store";

const store = configureStore();

const App = () => {
 
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );

}

export default App;