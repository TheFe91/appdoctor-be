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
import {Personnel} from '../models';
import {PersonnelRepository} from '../repositories';

export class PersonnelController {
  constructor(
    @repository(PersonnelRepository)
    public personnelRepository : PersonnelRepository,
  ) {}

  @post('/personnel')
  @response(200, {
    description: 'Personnel model instance',
    content: {'application/json': {schema: getModelSchemaRef(Personnel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personnel, {
            title: 'NewPersonnel',
            exclude: ['id'],
          }),
        },
      },
    })
    personnel: Omit<Personnel, 'id'>,
  ): Promise<Personnel> {
    return this.personnelRepository.create(personnel);
  }

  @get('/personnel/count')
  @response(200, {
    description: 'Personnel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Personnel) where?: Where<Personnel>,
  ): Promise<Count> {
    return this.personnelRepository.count(where);
  }

  @get('/personnel')
  @response(200, {
    description: 'Array of Personnel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Personnel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Personnel) filter?: Filter<Personnel>,
  ): Promise<Personnel[]> {
    return this.personnelRepository.find(filter);
  }

  @patch('/personnel')
  @response(200, {
    description: 'Personnel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personnel, {partial: true}),
        },
      },
    })
    personnel: Personnel,
    @param.where(Personnel) where?: Where<Personnel>,
  ): Promise<Count> {
    return this.personnelRepository.updateAll(personnel, where);
  }

  @get('/personnel/{id}')
  @response(200, {
    description: 'Personnel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Personnel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Personnel, {exclude: 'where'}) filter?: FilterExcludingWhere<Personnel>
  ): Promise<Personnel> {
    return this.personnelRepository.findById(id, filter);
  }

  @patch('/personnel/{id}')
  @response(204, {
    description: 'Personnel PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personnel, {partial: true}),
        },
      },
    })
    personnel: Personnel,
  ): Promise<void> {
    await this.personnelRepository.updateById(id, personnel);
  }

  @put('/personnel/{id}')
  @response(204, {
    description: 'Personnel PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() personnel: Personnel,
  ): Promise<void> {
    await this.personnelRepository.replaceById(id, personnel);
  }

  @del('/personnel/{id}')
  @response(204, {
    description: 'Personnel DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.personnelRepository.deleteById(id);
  }
}
