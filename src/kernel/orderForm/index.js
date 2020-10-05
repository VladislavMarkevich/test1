//@flow
import type {FormConfigType} from "./types";

export const formConfig: FormConfigType = {
  properties: [
    {
      id: "country",
      displayName: "Страна",
      isRequired: true,
      type: "comboEvroopt",
      apiMetadata: {
        methodName: "Addresses.Countries",
        nextPropertyId: "region",
        mainPropertyName: "Address8Id",
        propertyByDisplayName: "Address8Name"
      },
      isFirstToLoad: true
    },
    {
      id: "region",
      displayName: "Область (обл. центр)",
      isRequired: true,
      type: "comboEvroopt",
      apiMetadata: {
        methodName: "Addresses.Regions",
        previousPropertyId: "country",
        nextPropertyId: "district",
        mainPropertyName: "Address7Id",
        propertyByDisplayName: "Address7Name"
      }
    },
    {
      id: "district",
      displayName: "Район (район. центр)",
      isRequired: true,
      type: "comboEvroopt",
      apiMetadata: {
        methodName: "Addresses.Districts",
        previousPropertyId: "region",
        nextPropertyId: "locality",
        mainPropertyName: "Address6Id",
        propertyByDisplayName: "Address6Name"
      }
    },
    {
      id: "locality",
      displayName: "Населённый пунтк",
      isRequired: true,
      type: "comboEvroopt",
      apiMetadata: {
        methodName: "Addresses.Cities",
        previousPropertyId: "district",
        nextPropertyId: "street",
        mainPropertyName: "Address5Id",
        propertyByDisplayName: "Address5Name"
      }
    },
    {
      id: "street",
      displayName: "Улица",
      isRequired: true,
      type: "comboEvroopt",
      apiMetadata: {
        methodName: "Addresses.Streets",
        previousPropertyId: "locality",
        mainPropertyName: "Address4Id",
        propertyByDisplayName: "Address4Name"
      }
    },
    {
      id: "home",
      displayName: "Дом",
      isRequired: true,
      type: "number"
    },
    {
      id: "housing",
      displayName: "Корпус",
      type: "string"
    },
    {
      id: "entrance",
      displayName: "Подъезд",
      type: "number"
    },
    {
      id: "floor",
      displayName: "Этаж",
      type: "number"
    },
    {
      id: "flat",
      displayName: "Квартира",
      type: "number"
    }
  ]
};
