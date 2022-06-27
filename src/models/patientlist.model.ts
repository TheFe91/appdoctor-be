import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'techlabproject', table: 'Patientlist'}}
})
export class Patientlist extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 16,
    id: 1,
    mysql: {columnName: 'Patient', dataType: 'varchar', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  patient: string;

  @property({
    type: 'string',
    required: true,
    length: 16,
    id: 2,
    mysql: {columnName: 'Staff', dataType: 'varchar', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  staff: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Patientlist>) {
    super(data);
  }
}

export interface PatientlistRelations {
  // describe navigational properties here
}

export type PatientlistWithRelations = Patientlist & PatientlistRelations;
