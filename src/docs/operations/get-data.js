module.exports = {
  get: {
    tags: ["Firebase operations"],
    description:
      "get case data from firebase firestore with user id and case id",
    operationid: "getData",
    parameters: [
      {
        name: "caseid", // name of param
        in: "header", // location of param
        schema: {
          $ref: "#/components/schemas/uid", // id model
        },
        required: true, // mandatory
        description: "uid of the case",
      }, // param desc
      {
        name: "userid",
        in: "header",
        schema: {
          $ref: "#/components/schemas/uid",
        },
        required: true,
        description: "uid of the user",
      },
    ],
    responses: {
      200: {
        description: "Data obtained successfully",
        content: {
          "aplication/json": {
            schema: {
              $ref: "#/components/schemas/data",
            },
          },
        },
      },
      500: {
        description: "internal server error",
      },
      404: {
        description: "user uid not found",
      },
    },
  },
};
