module.exports = {
  // operation's method
  post: {
    tags: ["Firebase operations"], // operation's tag.
    description: "sets the loading progress of the current case", // operation's desc.
    operationId: "caseProgress", // unique operation id
    parameters: [
      // expected params.
      {
        name: "userid", // name of the param
        in: "header", // location of the param
        schema: {
          $ref: "#/components/schemas/uid", // data model of the param
        },
        required: true, // Mandatory param
        description: "user id to store the prorgess in firebase firestore", // param desc.
      },
      {
        name: "progress",
        in: "body",
        schema: {
          $ref: "#/components/schemas/progress",
        },
        required: true,
        description: "progress value",
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "case progress updated successfully", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "case progress updated successfully",
            },
          },
        },
      },
      400: {
        description: "progress param is required",
        content: {
          "text/plain": {
            schema: {
              type: "string",
              example: "progress param is required",
            },
          },
        },
      },
      // response code
      401: {
        description: "Error writing document", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "Error writing document", // error data model
            },
          },
        },
      },
    },
  },
};
