import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TechLabProjectDataSource} from '../datasources';
import {Personnel, PersonnelRelations} from '../models';

export class PersonnelRepository extends DefaultCrudRepository<
  Personnel,
  typeof Personnel.prototype.staffId,
  PersonnelRelations
> {
  constructor(
    @inject('datasources.TechLabProject') dataSource: TechLabProjectDataSource,
  ) {
    super(Personnel, dataSource);
  }
}
