import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TechLabProjectDataSource} from '../datasources';
import {Sessions, SessionsRelations} from '../models';

export class SessionsRepository extends DefaultCrudRepository<
  Sessions,
  typeof Sessions.prototype.sessionId,
  SessionsRelations
> {
  constructor(
    @inject('datasources.TechLabProject') dataSource: TechLabProjectDataSource,
  ) {
    super(Sessions, dataSource);
  }
}
