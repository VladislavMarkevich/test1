//@flow
export type PropertyTypesType = "comboEvroopt" | "string" | "combo" | "number";

type PropertyTypesOption = {
  id: string,
  displayName: string
};
export type PropertyTypesOptions = $ReadOnlyArray<PropertyTypesOption>;

export type PropertyTypesApiMetadata = {
  methodName: string,
  previousPropertyId?: string,
  nextPropertyId?: string,
  mainPropertyName: string,
  propertyByDisplayName: string
};

export type PropertyType = {
  id: string,
  displayName: string,
  isRequired?: boolean,
  type?: PropertyTypesType,
  apiMetadata?: PropertyTypesApiMetadata,
  isFirstToLoad?: boolean,
  options?: PropertyTypesOptions
};

export type FormConfigType = {
  properties: $ReadOnlyArray<PropertyType>
};
