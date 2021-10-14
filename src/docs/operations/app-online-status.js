module.exports = {
  // operation's method
  post: {
    tags: ["Firebase operations"], // operation's tag.
    description: "", // operation's desc.
    operationId: "appOnlineStatus", // unique operation id
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
        name: "online", // name of the param
        in: "body", // location of the param
        schema: {
          type: "boolean",
          example: true,
        },
        required: true, // Mandatory param
        description: "status of the app if its online or not", // param desc.
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Status updated successfully", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "Status updated successfully",
            },
          },
        },
      },
      // response code
      400: {
        description: "online param is required", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "online param is required",
            },
          },
        },
      },
    },
  },
};
