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
import {Patientlist} from '../models';
import {PatientlistRepository} from '../repositories';

export class PatientlistController {
  constructor(
    @repository(PatientlistRepository)
    public patientlistRepository : PatientlistRepository,
  ) {}

  @post('/patientlists')
  @response(200, {
    description: 'Patientlist model instance',
    content: {'application/json': {schema: getModelSchemaRef(Patientlist)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patientlist, {
            title: 'NewPatientlist',
            exclude: ['id'],
          }),
        },
      },
    })
    patientlist: Omit<Patientlist, 'id'>,
  ): Promise<Patientlist> {
    return this.patientlistRepository.create(patientlist);
  }

  @get('/patientlists/count')
  @response(200, {
    description: 'Patientlist model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Patientlist) where?: Where<Patientlist>,
  ): Promise<Count> {
    return this.patientlistRepository.count(where);
  }

  @get('/patientlists')
  @response(200, {
    description: 'Array of Patientlist model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Patientlist, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Patientlist) filter?: Filter<Patientlist>,
  ): Promise<Patientlist[]> {
    return this.patientlistRepository.find(filter);
  }

  @patch('/patientlists')
  @response(200, {
    description: 'Patientlist PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patientlist, {partial: true}),
        },
      },
    })
    patientlist: Patientlist,
    @param.where(Patientlist) where?: Where<Patientlist>,
  ): Promise<Count> {
    return this.patientlistRepository.updateAll(patientlist, where);
  }

  @get('/patientlists/{id}')
  @response(200, {
    description: 'Patientlist model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Patientlist, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Patientlist, {exclude: 'where'}) filter?: FilterExcludingWhere<Patientlist>
  ): Promise<Patientlist> {
    return this.patientlistRepository.findById(id, filter);
  }

  @patch('/patientlists/{id}')
  @response(204, {
    description: 'Patientlist PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patientlist, {partial: true}),
        },
      },
    })
    patientlist: Patientlist,
  ): Promise<void> {
    await this.patientlistRepository.updateById(id, patientlist);
  }

  @put('/patientlists/{id}')
  @response(204, {
    description: 'Patientlist PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() patientlist: Patientlist,
  ): Promise<void> {
    await this.patientlistRepository.replaceById(id, patientlist);
  }

  @del('/patientlists/{id}')
  @response(204, {
    description: 'Patientlist DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.patientlistRepository.deleteById(id);
  }
}
