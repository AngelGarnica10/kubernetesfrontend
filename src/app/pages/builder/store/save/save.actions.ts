import { Action } from "@ngrx/store";
import { BuildingCreateRequest, BuildingResponse } from "./save.models";

export enum Types {
  CREATE = '[Inmueble Create: Start]',
  CREATE_SUCCESS = '[Inmueble Create: Success]',
  CREATE_ERROR = '[Inmueble Create: Error]',

  READ = '[OObtener Inmueble: Start]',
  READ_SUCCESS = '[OObtener Inmueble: Success]',
  READ_ERROR = '[OObtener Inmueble: Error]'
}

export class Create implements Action {
  readonly type = Types.CREATE;
  constructor(
    public building: BuildingCreateRequest
  ) {}
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS
  constructor(
    public building: BuildingResponse
  ) {}
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR
  constructor(
    public error: string
  ) {}
}

export class Read implements Action {
  readonly type = Types.READ;
  constructor(
  ) {}
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS
  constructor(
    public buildings: BuildingResponse[]
  ) {}
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR
  constructor(
    public error: string
  ) {}
}

export type All =
  Create |
  CreateSuccess |
  CreateError |
  Read |
  ReadSuccess |
  ReadError;
