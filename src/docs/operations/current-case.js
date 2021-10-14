module.exports = {
  // operation's method
  post: {
    tags: ["Firebase operations"], // operation's tag.
    description: "", // operation's desc.
    operationId: "postCurrentCase", // unique operation id
    parameters: [
      {
        name: "userid", // name of the param
        in: "header", // location of the param
        schema: {
          $ref: "#/components/schemas/uid", // data model of the param
        },
        required: true, // Mandatory param
        description: "UID of the current user", // param desc.
      },
      {
        name: "caseId", // name of the param
        in: "body", // location of the param
        schema: {
          $ref: "#/components/schemas/uid", // data model of the param
        },
        required: true, // Mandatory param
        description: "Case UID For the selected case", // param desc.
      },
      {
        name: "viewIndex", // name of the param
        in: "body", // location of the param
        schema: {
          $ref: "#/components/schemas/viewIndex", // data model of the param
        },
        required: true, // Mandatory param
        description: "view index ", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "current case updated successfully", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "current case updated successfully",
            },
          },
        },
      },
      // response code
      400: {
        description: "Error writing document", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "Error writing document",
            },
          },
        },
      },
      401: {
        description: "caseId and viewIndex params are required", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "caseId and viewIndex params are required",
            },
          },
        },
      },
    },
  },
};
