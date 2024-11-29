import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { TASK_TEST_SCENARIOS } from './task.integration-test-cases';
import { TaskModule } from '../src/task.module';

const new_item_data = {
  name: "Test Name",
  description: "Test Description"
};

describe('Task Integration Tests', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TaskModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        errorHttpStatusCode: 400,
      }),
    );
    await app.init();
  });

  const testCreateEndpointScenario = async (scenarioKey: keyof typeof TASK_TEST_SCENARIOS) => {
    const scenario = TASK_TEST_SCENARIOS[scenarioKey];
    await request(app.getHttpServer())
      .post('/items')
      .send(scenario.input)
      .expect(scenario.expectedStatus)
      .expect(scenario.expectedResponse);
  }

  const testGetAllEndpointScenario = async (scenarioKey: keyof typeof TASK_TEST_SCENARIOS) => {
    const scenario = TASK_TEST_SCENARIOS[scenarioKey];
    await request(app.getHttpServer())
      .post('/items')
      .send(new_item_data);
    await request(app.getHttpServer())
      .get('/items')
      .send(scenario.input)
      .expect(scenario.expectedStatus)
      .expect(scenario.expectedResponse);
  }

  const testGetEndpointScenario = async (scenarioKey: keyof typeof TASK_TEST_SCENARIOS) => {
    const scenario = TASK_TEST_SCENARIOS[scenarioKey];
    await request(app.getHttpServer())
      .post('/items')
      .send(new_item_data);
    await request(app.getHttpServer())
      .get(`/items/${scenario.id}`)
      .send()
      .expect(scenario.expectedStatus)
      .expect(scenario.expectedResponse);
  }

  const testPutEndpointScenario = async (scenarioKey: keyof typeof TASK_TEST_SCENARIOS) => {
    const scenario = TASK_TEST_SCENARIOS[scenarioKey];
    await request(app.getHttpServer())
      .post('/items')
      .send(new_item_data);
    await request(app.getHttpServer())
      .put(`/items/${scenario.id}`)
      .send(scenario.input)
      .expect(scenario.expectedStatus)
      .expect(scenario.expectedResponse);
  }

  const testDeleteEndpointScenario = async (scenarioKey: keyof typeof TASK_TEST_SCENARIOS) => {
    const scenario = TASK_TEST_SCENARIOS[scenarioKey];
    await request(app.getHttpServer())
      .post('/items')
      .send(new_item_data);
    await request(app.getHttpServer())
      .delete(`/items/${scenario.id}`)
      .send()
      .expect(scenario.expectedStatus)
      .expect(scenario.expectedResponse);
  }

  it('CREATE_SUCCESS', async () => {
    await testCreateEndpointScenario("CREATE_SUCCESS")
  });

  it('CREATE_FAIL', async () => {
    await testCreateEndpointScenario("CREATE_FAIL")
  });

  it('GET_ALL_SUCCESS', async () => {
    await testGetAllEndpointScenario("GET_ALL_SUCCESS")
  });

  it('GET_ALL_FAIL', async () => {
    await testGetAllEndpointScenario("GET_ALL_FAIL")
  });

  it('GET_SUCCESS', async () => {
    await testGetEndpointScenario("GET_SUCCESS");
  });

  it('GET_FAIL', async () => {
    await testGetEndpointScenario("GET_FAIL");
  });

  it('PUT_SUCCESS', async () => {
    await testPutEndpointScenario("PUT_SUCCESS");
  });

  it('PUT_FAIL', async () => {
    await testPutEndpointScenario("PUT_FAIL");
  });

  it('DELETE_SUCCESS', async () => {
    await testDeleteEndpointScenario("DELETE_SUCCESS");
  });

  it('DELETE_FAIL', async () => {
    await testDeleteEndpointScenario("DELETE_FAIL");
  });
});