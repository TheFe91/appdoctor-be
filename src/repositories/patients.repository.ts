import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TechLabProjectDataSource} from '../datasources';
import {Patients, PatientsRelations} from '../models';

export class PatientsRepository extends DefaultCrudRepository<
  Patients,
  typeof Patients.prototype.ssn,
  PatientsRelations
> {
  constructor(
    @inject('datasources.TechLabProject') dataSource: TechLabProjectDataSource,
  ) {
    super(Patients, dataSource);
  }
}
