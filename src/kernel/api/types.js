//@flow

export type BodyMetadataType = {
  +methodName: string,
  propertyKey?: string,
  propertyValue?: string
};

export type GetEvrooptInfoType = {
  bodyMetadata: BodyMetadataType
};

export type BodyRequestType = {
  CRC: string,
  Packet: {
    JWT: ?string,
    MethodName: string,
    ServiceNumber: string,
    Data: {[string]: string}
  }
};

//NOTE: results

type ErrorResult = {
  Error: string,
  ErrorDescription: string
};

type SuccessResult = {
  [string]: any
};

export type GetEvrooptInfoResult = {Table: $ReadOnlyArray<SuccessResult | ErrorResult>};
