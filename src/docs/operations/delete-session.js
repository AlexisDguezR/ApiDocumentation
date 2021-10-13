module.exports = {
  // operation's method
  get: {
    tags: ["Firebase operations"], // operation's tag.
    description: "Deletes a RemoteSesson with the given id", // operation's desc.
    operationId: "getSession", // unique operation id
    parameters: [
      // expected params.
      {
        name: "sessionid", // name of the param
        in: "header", // location of the param
        schema: {
          $ref: "#/components/schemas/uid", // data model of the param
        },
        required: true, // Mandatory param
        description: "session UID For the session to remove", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "session is removed", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/removedSession", // todo data model
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
