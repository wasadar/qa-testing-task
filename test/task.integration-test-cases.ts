export const TASK_TEST_SCENARIOS = {
    CREATE_SUCCESS: {
        type: "success",
        input: {
            name: "Test Name",
            description: "Test Description"
        },
        expectedStatus: 201,
        expectedResponse: {
            id: 1,
            name: "Test Name",
            description: "Test Description"
        }
    },
    CREATE_FAIL: {
        type: "error",
        input: {
            name: "No Description"
        },
        expectedStatus: 400,
        expectedResponse: {
            message: [ 'description should not be empty' ],
            error: 'Bad Request',
            statusCode: 400
        }
    },
}