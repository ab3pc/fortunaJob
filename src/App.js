import React from "react";
import { Route } from "react-router";
import "./App.css";
import { Header, Footer, Modal } from "./components";
import { Home, Blog } from "./components/pages";
import { CSSTransition } from "react-transition-group";

function App() {
  const [visibleModal, setVisibleModal] = React.useState(false);

  return (
    <div className="page">
      <Header setVisibleModal={setVisibleModal} />
      <Route
        path="/"
        render={() => <Home setVisibleModal={setVisibleModal} />}
        exact
      />
      <Route path="/blog" render = {() => <Blog setVisibleModal={setVisibleModal} />} exact />
      <Footer />

      <CSSTransition
        in={visibleModal}
        timeout={300}
        classNames="dialog"
        unmountOnExit
      >
        <Modal setVisibleModal={setVisibleModal} />
      </CSSTransition>


    </div>
  );
}

export default App;
