module.exports = {
  delete: {
    tags: ["Firebase operations"],
    description: "deletes a user from firebase firestore",
    operationid: "firebaseDeleteUser",
    parameters: [
      {
        name: "uid", // name of param
        in: "path", // location of param
        schema: {
          $ref: "#/components/schemas/uid", // id model
        },
        required: true, // mandatory
        description: "Deleting a firebase user with uid",
      }, // param desc
    ],
    responses: {
      200: {
        description: "user deleted successfully",
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
