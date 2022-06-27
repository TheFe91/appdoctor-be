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
import {Patients} from '../models';
import {PatientsRepository} from '../repositories';

export class PatientsController {
  constructor(
    @repository(PatientsRepository)
    public patientsRepository : PatientsRepository,
  ) {}

  @post('/patients')
  @response(200, {
    description: 'Patients model instance',
    content: {'application/json': {schema: getModelSchemaRef(Patients)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patients, {
            title: 'NewPatients',
            exclude: ['id'],
          }),
        },
      },
    })
    patients: Omit<Patients, 'id'>,
  ): Promise<Patients> {
    return this.patientsRepository.create(patients);
  }

  @get('/patients/count')
  @response(200, {
    description: 'Patients model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Patients) where?: Where<Patients>,
  ): Promise<Count> {
    return this.patientsRepository.count(where);
  }

  @get('/patients')
  @response(200, {
    description: 'Array of Patients model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Patients, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Patients) filter?: Filter<Patients>,
  ): Promise<Patients[]> {
    return this.patientsRepository.find(filter);
  }

  @patch('/patients')
  @response(200, {
    description: 'Patients PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patients, {partial: true}),
        },
      },
    })
    patients: Patients,
    @param.where(Patients) where?: Where<Patients>,
  ): Promise<Count> {
    return this.patientsRepository.updateAll(patients, where);
  }

  @get('/patients/{id}')
  @response(200, {
    description: 'Patients model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Patients, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Patients, {exclude: 'where'}) filter?: FilterExcludingWhere<Patients>
  ): Promise<Patients> {
    return this.patientsRepository.findById(id, filter);
  }

  @patch('/patients/{id}')
  @response(204, {
    description: 'Patients PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patients, {partial: true}),
        },
      },
    })
    patients: Patients,
  ): Promise<void> {
    await this.patientsRepository.updateById(id, patients);
  }

  @put('/patients/{id}')
  @response(204, {
    description: 'Patients PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() patients: Patients,
  ): Promise<void> {
    await this.patientsRepository.replaceById(id, patients);
  }

  @del('/patients/{id}')
  @response(204, {
    description: 'Patients DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.patientsRepository.deleteById(id);
  }
}
