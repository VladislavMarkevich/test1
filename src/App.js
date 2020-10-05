//@flow
import * as React from "react";

import OrderForm from "pages/OrderForm";
import MainMessage from "components/MainMessage";

function App(): any {
  return (
    <React.Fragment>
      <div className="app">
        <OrderForm />
      </div>
      <MainMessage />
    </React.Fragment>
  );
}

export default App;
