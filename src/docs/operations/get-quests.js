module.exports = {
  // operation's method
  get: {
    tags: ["Firebase operations"], // operation's tag.
    description: "gets the answers of a given case id", // operation's desc.
    operationId: "getQuest", // unique operation id
    parameters: [
      // expected params.
      {
        name: "caseid", // name of the param
        in: "header", // location of the param
        schema: {
          $ref: "#/components/schemas/uid", // data model of the param
        },
        required: true, // Mandatory param
        description: "case UID For the answers to show", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "case answers", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/answers", // todo data model
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
