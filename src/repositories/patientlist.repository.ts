import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TechLabProjectDataSource} from '../datasources';
import {Patientlist, PatientlistRelations} from '../models';

export class PatientlistRepository extends DefaultCrudRepository<
  Patientlist,
  typeof Patientlist.prototype.patient,
  PatientlistRelations
> {
  constructor(
    @inject('datasources.TechLabProject') dataSource: TechLabProjectDataSource,
  ) {
    super(Patientlist, dataSource);
  }
}
