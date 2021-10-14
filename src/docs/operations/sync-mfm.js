module.exports = {
  // operation's method
  post: {
    tags: ["Firebase operations"], // operation's tag.
    description: "sync mfm with FUVE", // operation's desc.
    operationId: "syncMfm", // unique operation id
    parameters: [
      // expected params.
      {
        name: "mail", // name of the param
        in: "header", // location of the param
        schema: {
          $ref: "#/components/schemas/email", // data model of the param
        },
        required: true, // Mandatory param
        description: "user email to be synced", // param desc.
      },
      {
        name: "userid",
        in: "header",
        schema: {
          $ref: "#/components/schemas/uid",
        },
        required: true,
        description: "UID of the user",
      },
      {
        name: "idtoken",
        in: "header",
        schema: {
          $ref: "#/component/schemas/idToken",
        },
      },
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Account is synced", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "account synced successfully",
            },
          },
        },
      },
      400: {
        description: "theres an error with firebase firestore",
        content: {
          "text/plain": {
            schema: {
              type: "string",
              example: "Error writing document",
            },
          },
        },
      },
      // response code
      403: {
        description: "user is already synced", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "User already synced", // error data model
            },
          },
        },
      },
      500: {
        description: "internal server error", // response desc.
        content: {
          // content-type
          "text/plain": {
            schema: {
              type: "string",
              example: "Server error", // error data model
            },
          },
        },
      },
    },
  },
};
