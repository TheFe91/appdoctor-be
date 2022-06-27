import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Sessions} from '../models';
import {SessionsRepository} from '../repositories';

export class SessionsController {
  constructor(
    @repository(SessionsRepository)
    public sessionsRepository : SessionsRepository,
  ) {}

  @post('/sessions')
  @response(200, {
    description: 'Sessions model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sessions)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sessions, {
            title: 'NewSessions',
            exclude: ['id'],
          }),
        },
      },
    })
    sessions: Omit<Sessions, 'id'>,
  ): Promise<Sessions> {
    return this.sessionsRepository.create(sessions);
  }

  @get('/sessions/count')
  @response(200, {
    description: 'Sessions model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sessions) where?: Where<Sessions>,
  ): Promise<Count> {
    return this.sessionsRepository.count(where);
  }

  @get('/sessions')
  @response(200, {
    description: 'Array of Sessions model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sessions, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sessions) filter?: Filter<Sessions>,
  ): Promise<Sessions[]> {
    return this.sessionsRepository.find(filter);
  }

  @patch('/sessions')
  @response(200, {
    description: 'Sessions PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sessions, {partial: true}),
        },
      },
    })
    sessions: Sessions,
    @param.where(Sessions) where?: Where<Sessions>,
  ): Promise<Count> {
    return this.sessionsRepository.updateAll(sessions, where);
  }

  @get('/sessions/{id}')
  @response(200, {
    description: 'Sessions model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sessions, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Sessions, {exclude: 'where'}) filter?: FilterExcludingWhere<Sessions>
  ): Promise<Sessions> {
    return this.sessionsRepository.findById(id, filter);
  }

  @patch('/sessions/{id}')
  @response(204, {
    description: 'Sessions PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sessions, {partial: true}),
        },
      },
    })
    sessions: Sessions,
  ): Promise<void> {
    await this.sessionsRepository.updateById(id, sessions);
  }

  @put('/sessions/{id}')
  @response(204, {
    description: 'Sessions PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sessions: Sessions,
  ): Promise<void> {
    await this.sessionsRepository.replaceById(id, sessions);
  }

  @del('/sessions/{id}')
  @response(204, {
    description: 'Sessions DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sessionsRepository.deleteById(id);
  }
}
