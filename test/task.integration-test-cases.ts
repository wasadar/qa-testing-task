export const TASK_TEST_SCENARIOS = {
    CREATE_SUCCESS: {
        type: "success",
        id: 0,
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
        id: 0,
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
    GET_ALL_SUCCESS: {
        type: "success",
        id: 0,
        input: {},
        expectedStatus: 200,
        expectedResponse: [{
            id: 1,
            name: "Test Name",
            description: "Test Description"
        }]
    },
    GET_ALL_FAIL: {
        type: "error",
        id: 0,
        input: { 
            somothing_in_the_body: "something in the body"
        },
        expectedStatus: 200,
        expectedResponse: [{
            id: 1,
            name: "Test Name",
            description: "Test Description"
        }]
    },
    GET_SUCCESS: {
        type: "success",
        id: 1,
        input: {},
        expectedStatus: 200,
        expectedResponse: {
            id: 1,
            name: "Test Name",
            description: "Test Description"
        }
    },
    GET_FAIL: {
        type: "error",
        id: 10,
        input: {},
        expectedStatus: 404,
        expectedResponse: {
            message: 'Item with id 10 not found',
            error: 'Not Found',
            statusCode: 404
        }
    },
    PUT_SUCCESS: {
        type: "success",
        id: 1,
        input: {
            name: "Other Test Name",
            description: "Other Test Description"
        },
        expectedStatus: 200,
        expectedResponse: {
            id: 1,
            name: "Other Test Name",
            description: "Other Test Description"
        }
    },
    PUT_FAIL: {
        type: "error",
        id: 10,
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
    DELETE_SUCCESS: {
        type: "success",
        id: 1,
        input: {},
        expectedStatus: 200,
        expectedResponse: {
            message: 'Item with id 1 deleted successfully',
        }
    },
    DELETE_FAIL: {
        type: "error",
        id: 10,
        input: {},
        expectedStatus: 404,
        expectedResponse: {
            message: 'Item with id 10 not found',
            error: 'Not Found',
            statusCode: 404
        }
    }
}