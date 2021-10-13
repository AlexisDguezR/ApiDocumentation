module.exports = {
  // operation's method
  get: {
    tags: ["Firebase operations"], // operation's tag.
    description: "Get id with caseId", // operation's desc.
    operationId: "getCase", // unique operation id
    parameters: [
      // expected params.
      {
        name: "caseid", // name of the param
        in: "header", // location of the param
        schema: {
          $ref: "#/components/schemas/uid", // data model of the param
        },
        required: true, // Mandatory param
        description: "case UID For the case to show", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Case is obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/case", // todo data model
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
