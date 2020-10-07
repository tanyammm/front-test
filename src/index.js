import React from "react";
import ReactDOM from "react-dom";
import { observable } from "mobx";
import { Provider } from "mobx-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page1 from "./page1"; // импорт первой страницы
import Page2 from "./page2"; // импорт внутренней страницы
import Page3 from "./not-found"; // импорт страницы с отображением ошибки
import data from "./data.json"; // импорт файла json
import "./index.css";

const App = () => {
  return (
    <div className="App">
      {/* выбор маршрутов */}
      <Switch>
        {/* реализация маршрутов */}
        <Route exact path="/" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        {/* обработка перехода на несуществующие страницы */}
        <Route path="*" component={Page3} />
      </Switch>
    </div>
  );
};

// хранилище Mobx
const store = {
  data,
  info: [],

  get getKey() {
    return this.info.key;
  },
  get getName() {
    return this.info.name;
  },
  get getCondition() {
    return this.info.condition;
  },
  get getEmail() {
    return this.info.email;
  },

  get getAddresses() {
    return this.info.addresses;
  },
};

ReactDOM.render(
  <Provider store={store}>
    {/* сохранение в историю */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

export default observable(store);
