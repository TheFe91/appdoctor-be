import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {TechLabProjectDataSource} from '../datasources';
import {Patients, PatientsRelations, Patientlist} from '../models';
import {PatientlistRepository} from './patientlist.repository';

export class PatientsRepository extends DefaultCrudRepository<
  Patients,
  typeof Patients.prototype.ssn,
  PatientsRelations
> {

  public readonly patientlists: HasManyRepositoryFactory<Patientlist, typeof Patients.prototype.ssn>;

  constructor(
    @inject('datasources.TechLabProject') dataSource: TechLabProjectDataSource, @repository.getter('PatientlistRepository') protected patientlistRepositoryGetter: Getter<PatientlistRepository>,
  ) {
    super(Patients, dataSource);
    this.patientlists = this.createHasManyRepositoryFactoryFor('patientlists', patientlistRepositoryGetter,);
    this.registerInclusionResolver('patientlists', this.patientlists.inclusionResolver);
  }
}
