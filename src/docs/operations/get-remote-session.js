module.exports = {
  // operation's method
  get: {
    tags: ["Firebase operations"], // operation's tag.
    description: "Gets the premium status of a user uid", // operation's desc
    operationId: "getRemoteSession", // unique operation id
    parameters: [
      // expected params.
      {
        name: "userid", // name of the param
        in: "header", // location of the param
        schema: {
          $ref: "#/components/schemas/uid", // data model of the param
        },
        required: true, // Mandatory param
        description: "checks if a user with the given uid is premium or not", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "premium status", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/remoteSession", // todo data model
            },
          },
        },
      },
      // response code
      404: {
        description: "Document not found", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // error data model
            },
          },
        },
      },
    },
  },
};
