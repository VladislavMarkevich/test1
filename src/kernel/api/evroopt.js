//@flow
import {callApi} from "./common";

import type {GetEvrooptInfoType, BodyMetadataType, BodyRequestType, GetEvrooptInfoResult} from "./types";

const requertURL: string = `https://rest.eurotorg.by/10201/Json`;
const serviceNumber: string = "767659F1-AB94-4E7B-9112-FC2780E03882";

const getBodyRequest = ({methodName, propertyKey, propertyValue}: BodyMetadataType): BodyRequestType => {
  const data = {};
  if (propertyKey && propertyValue) {
    data[propertyKey] = propertyValue;
  }

  return {
    CRC: "",
    Packet: {
      JWT: null,
      MethodName: methodName,
      ServiceNumber: serviceNumber,
      Data: data
    }
  };
};

export const getEvrooptInfo = ({bodyMetadata}: GetEvrooptInfoType): Promise<any> => {
  const bodyRequest = getBodyRequest(bodyMetadata);

  return callApi({requestURL: requertURL, method: "POST", body: bodyRequest});
};
