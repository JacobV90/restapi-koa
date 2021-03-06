export type ApiEndpointDetails = {
  name: string;
  requestObjType: string;
  responseOjbType: string;
}

export type Schema = {
  request: object
  response: object
}

export type SchemaDoc = {
  [apiName: string]: Schema
}

export enum HttpAction {
  GET = "GET",
  PATCH = "PATCH",
  POST = "POST",
  DEL = "DEL",
}

