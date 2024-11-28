import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { TASK_TEST_SCENARIOS } from './task.integration-test-cases';
import { TaskModule } from '../src/task.module';

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

  it('CREATE_SUCCESS', async () => {
    await testCreateEndpointScenario("CREATE_SUCCESS")
  });

  it('CREATE_FAIL', async () => {
    await testCreateEndpointScenario("CREATE_FAIL")
  });
});