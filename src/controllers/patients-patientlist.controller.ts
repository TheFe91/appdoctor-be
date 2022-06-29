import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Patients,
  Patientlist,
} from '../models';
import {PatientsRepository} from '../repositories';

export class PatientsPatientlistController {
  constructor(
    @repository(PatientsRepository) protected patientsRepository: PatientsRepository,
  ) { }

  @get('/patients/{id}/patientlists', {
    responses: {
      '200': {
        description: 'Array of Patients has many Patientlist',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Patientlist)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Patientlist>,
  ): Promise<Patientlist[]> {
    return this.patientsRepository.patientlists(id).find(filter);
  }

  @post('/patients/{id}/patientlists', {
    responses: {
      '200': {
        description: 'Patients model instance',
        content: {'application/json': {schema: getModelSchemaRef(Patientlist)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Patients.prototype.ssn,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patientlist, {
            title: 'NewPatientlistInPatients',
            exclude: ['patient'],
            optional: ['Patient']
          }),
        },
      },
    }) patientlist: Omit<Patientlist, 'patient'>,
  ): Promise<Patientlist> {
    return this.patientsRepository.patientlists(id).create(patientlist);
  }

  @patch('/patients/{id}/patientlists', {
    responses: {
      '200': {
        description: 'Patients.Patientlist PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Patientlist, {partial: true}),
        },
      },
    })
    patientlist: Partial<Patientlist>,
    @param.query.object('where', getWhereSchemaFor(Patientlist)) where?: Where<Patientlist>,
  ): Promise<Count> {
    return this.patientsRepository.patientlists(id).patch(patientlist, where);
  }

  @del('/patients/{id}/patientlists', {
    responses: {
      '200': {
        description: 'Patients.Patientlist DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Patientlist)) where?: Where<Patientlist>,
  ): Promise<Count> {
    return this.patientsRepository.patientlists(id).delete(where);
  }
}
