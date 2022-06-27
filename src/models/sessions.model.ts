import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'techlabproject', table: 'Sessions'}}
})
export class Sessions extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 16,
    id: 1,
    mysql: {columnName: 'SessionId', dataType: 'varchar', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  sessionId: string;

  @property({
    type: 'string',
    required: true,
    length: 16,
    id: 2,
    mysql: {columnName: 'Patient', dataType: 'varchar', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  patient: string;

  @property({
    type: 'string',
    required: true,
    length: 16,
    id: 3,
    mysql: {columnName: 'Staff', dataType: 'varchar', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  staff: string;

  @property({
    type: 'date',
    mysql: {columnName: 'Date', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  date?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Level', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  level?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Complete', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  complete?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'TotalTime', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  totalTime?: number;

  @property({
    type: 'string',
    length: 6,
    mysql: {columnName: 'trunkCShelfR1', dataType: 'varchar', dataLength: 6, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trunkCShelfR1?: string;

  @property({
    type: 'string',
    length: 6,
    mysql: {columnName: 'trunkCShelfR2', dataType: 'varchar', dataLength: 6, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trunkCShelfR2?: string;

  @property({
    type: 'string',
    length: 6,
    mysql: {columnName: 'trunkCShelfR3', dataType: 'varchar', dataLength: 6, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trunkCShelfR3?: string;

  @property({
    type: 'string',
    length: 6,
    mysql: {columnName: 'trunkCShelfL1', dataType: 'varchar', dataLength: 6, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trunkCShelfL1?: string;

  @property({
    type: 'string',
    length: 6,
    mysql: {columnName: 'trunkCShelfL2', dataType: 'varchar', dataLength: 6, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trunkCShelfL2?: string;

  @property({
    type: 'string',
    length: 6,
    mysql: {columnName: 'trunkCShelfL3', dataType: 'varchar', dataLength: 6, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  trunkCShelfL3?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sessions>) {
    super(data);
  }
}

export interface SessionsRelations {
  // describe navigational properties here
}

export type SessionsWithRelations = Sessions & SessionsRelations;
