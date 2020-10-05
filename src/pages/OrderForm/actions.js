//@flow
import {createActions} from "redux-actions";

import {formConfig} from "kernel/orderForm";
import {getEvrooptInfo} from "kernel/api/evroopt";
import {MAIN_MESSAGE_OPEN} from "components/MainMessage/actionTypes";
import {ORDER_FORM_PUSH_INFO, ORDER_FORM_CHANGE_VALUE} from "./actionTypes";

import type {Action} from "kernel/types/reduxDependencies";
import type {BodyMetadataType, GetEvrooptInfoResult} from "kernel/api/types";
import type {LoadDataPropsType, ChangePropertyValuePropsType} from "./types";

const {
  mainMessageOpen: openMainMessage,
  orderFormPushInfo: pushInfoOrderForm,
  orderFormChangeValue: changeValueOrderForm
} = createActions(MAIN_MESSAGE_OPEN, ORDER_FORM_PUSH_INFO, ORDER_FORM_CHANGE_VALUE);

export const loadData: LoadDataPropsType => Action<Promise<void>> = ({
  bodyMetadata,
  propertyValue,
  isFirstToLoad
}) => async dispatch => {
  const {methodName, mainPropertyName, nextPropertyId} = bodyMetadata;
  if (!nextPropertyId) return;
  const nextPropertyInfo = formConfig.properties.find(item => item.id === nextPropertyId);

  const {
    apiMetadata: {
      methodName: nextMethodName,
      mainPropertyName: nextMainPropertyName,
      propertyByDisplayName: nextPropertyByDisplayName
    } = {}
  } = nextPropertyInfo || {};

  const correctBodyMetadata =
    isFirstToLoad && !propertyValue
      ? {methodName}
      : {methodName: nextMethodName, propertyKey: mainPropertyName, propertyValue: propertyValue};

  await getEvrooptInfo({bodyMetadata: correctBodyMetadata})
    .then(async (response: Response) => {
      const result: GetEvrooptInfoResult = await response.json();
      const {Table: table} = result;
      const {Error: error, ErrorDescription: errorDescription} = table[0];
      if (error) {
        dispatch(
          openMainMessage({
            type: "warn",
            header: `Во время загрузки данных произошла ошибка: ${error}`,
            text: errorDescription
          })
        );
      } else {
        const {propertyByDisplayName} = bodyMetadata;
        const correctMethodName = isFirstToLoad && !propertyValue ? methodName : nextMethodName;
        const correctId = isFirstToLoad && !propertyValue ? mainPropertyName : nextMainPropertyName;
        const correctDisplayNameId =
          isFirstToLoad && !propertyValue ? propertyByDisplayName : nextPropertyByDisplayName;
        const convertValue = (table || []).map(item => {
          const {[correctId]: id, [correctDisplayNameId]: displayName} = item;
          return {id, displayName};
        });
        dispatch(
          pushInfoOrderForm({
            mainPropertyKey: correctMethodName,
            secondaryPropertyKey: propertyValue,
            isFirstToLoad: isFirstToLoad && !propertyValue,
            value: convertValue
          })
        );
      }
    })
    .catch((e: any) => {
      let text = null;
      try {
        text = JSON.stringify(e);
      } catch {
        text = null;
      }
      dispatch(
        openMainMessage({
          type: "warn",
          header: "Нет доступа к серверу",
          text: `Проверьте работоспособность сервера. Ошибка: ${text || ""}`
        })
      );
    });
};

export const changePropertyValue: ChangePropertyValuePropsType => Action<void> = props => dispatch => {
  dispatch(changeValueOrderForm(props));
};
