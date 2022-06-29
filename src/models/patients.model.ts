import {Entity, model, property, hasMany} from '@loopback/repository';
import {Patientlist} from './patientlist.model';

@model({
  settings: {idInjection: false, mysql: {schema: 'techlabproject', table: 'Patients'}}
})
export class Patients extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 16,
    id: 1,
    mysql: {columnName: 'SSN', dataType: 'varchar', dataLength: 16, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ssn: string;

  @property({
    type: 'string',
    length: 40,
    mysql: {columnName: 'Name', dataType: 'varchar', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  name?: string;

  @property({
    type: 'string',
    length: 40,
    mysql: {columnName: 'Surname', dataType: 'varchar', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  surname?: string;

  @property({
    type: 'string',
    length: 50,
    mysql: {columnName: 'Email', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  email?: string;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'Password', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  password?: string;

  @hasMany(() => Patientlist, {keyTo: 'Patient'})
  patientlists: Patientlist[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Patients>) {
    super(data);
  }
}

export interface PatientsRelations {
  // describe navigational properties here
}

export type PatientsWithRelations = Patients & PatientsRelations;
