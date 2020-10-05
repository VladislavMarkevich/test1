//@flow
import React from "react";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {loadData, changePropertyValue} from "./actions";
import Property from "./Property";
import {formConfig} from "kernel/orderForm";

import type {ComponentProps as Props} from "./types";

const OrderForm = ({onLoadData, onChangePropertyValue}: Props) => {
  const {properties} = formConfig;

  const handleClickOnButton = () => {};

  return (
    <div className="order-form">
      <Form>
        {properties.map(property => {
          const {id} = property;
          return (
            <Property {...property} key={id} onLoadData={onLoadData} onChangePropertyValue={onChangePropertyValue} />
          );
        })}
      </Form>
      <Button onClick={handleClickOnButton} type="submit">
        Сохранить
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  onLoadData: props => loadData(props),
  onChangePropertyValue: props => changePropertyValue(props)
};

//$FlowFixMe
export default connect(undefined, mapDispatchToProps)(OrderForm);
