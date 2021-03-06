const e = require("express");

module.exports = {
  components: {
    schemas: {
      idToken: {
        type: "string",
        description: "session token",
        example:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0MTk2YWVlMTE5ZmUyMTU5M2Q0OGJmY2ZiNWJmMDAxNzdkZDRhNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ1ODM0OTUzNzUxLXNraDZubjMzNmRxbm1naGcyaXNucmZwcm9uYmozNnA3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ1ODM0OTUzNzUxLXNraDZubjMzNmRxbm1naGcyaXNucmZwcm9uYmozNnA3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4MDUyNjQxNTQ4Nzg0ODQ5OTI5IiwiZW1haWwiOiJlZXIxMDE4OTVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJfaUViVHpGTWgzby1ZM2w4YWFlTTV3IiwiaWF0IjoxNjM0MDYwMDgxLCJleHAiOjE2MzQwNjM2ODF9.jEnqOB4bT8k_nkOxGJIUGq2zmPNNrY6TUq_8Y0Vz5vXUCOeAw_GaVvpVyadB8QAhCoqchHLS_jhl90rKHMU6xPh3m0Uq5azhX8XgxwmBZOD4JywA17ptf2Yo_QMaP774Jh4CBrjtC5dTgEeaE-NLHUPFH4UGeCNXIu5g9ay3HYTR1w7O7_M1VpJ8OPZkRQURM85Nx15F1gaMmh9qA-OydRLwDulGBnQR4v51Ot2tyN5NjtuSXBpiZBLuprF3br6QMe64A36FfZxbY2Vo3o97yvp0R_rZ2PetL1sMMSY1qdr8tNrVQg39TvqhGrppY8L2FN4W4vZzlhsxta6jN20YkA",
      },
      progress: {
        type: "string",
        description: "progress number",
        example: 0.5224545486524,
      },
      viewIndex: {
        type: "string",
        description: "view index number",
        example: 1,
      },
      email: {
        type: "string",
        description: "user email",
        example: "correo@correo.com",
      },
      remoteSession: {
        type: "object",
        description: "data of the remote session",
        properties: {
          session: {
            type: "string",
            description: "uid of the session",
            example: "N49V2APfblXlSv3nr4zVhjC6nxv2",
          },
          caseProgress: {
            type: "number",
            description:
              "number to share the loading process between webapp and mobileapp",
            example: 0,
          },
          webApp: {
            type: "object",
            description: "time in webApp for disconect",
            properties: {
              time: {
                type: "object",
                properties: {
                  _seconds: {
                    type: "number",
                    example: 1634159384,
                  },
                  _nanoseconds: {
                    type: "number",
                    example: 894000000,
                  },
                },
              },
              online: {
                type: "boolean",
                description: "shows if the webApp is online or not",
                example: false,
              },
            },
          },
          caseData: {
            type: "object",
            description: "shows the case thats selected for the session",
            properties: {
              caseId: {
                type: "string",
                description: "shows the uid of the opened case",
                example: "cr8mrVuK0TijspexojP8",
              },
              viewIndex: {
                type: "number",
                description: "view selected",
                example: 0,
              },
              time: {
                type: "timestamp",
                description: "show the time at which the case was accessed ",
                example: "2021-10-13 21:09",
              },
            },
          },
          deviceName: {
            type: "string",
            description: "Name of the device its being use as a transducer ",
            example: "POCO X3 NFC",
          },
          deviceId: {
            type: "string",
            description: "device id from mobile app",
            example: "b8a31036dcb8ac0c",
          },
          mobile: {
            type: "object",
            description: "shows the time and online status of the mobile app",
            properties: {
              time: {
                type: "timestamp",
                description: "time the mobile app accessed",
                example: "2021-10-13 21:09",
              },
              online: {
                type: "boolean",
                description: "shows if the mobile app is online",
                example: false,
              },
            },
          },
        },
      },
      data: {
        type: "object",
        description: "data of the user and the case id",
        properties: {
          rate: {
            type: "object",
            description: "rates description",
            properties: {},
          },

          case: {
            type: "object",
            description: "case description",
            properties: {
              title: {
                type: "object",
                description: "title of the case in spanish and english",
                properties: {
                  es: {
                    type: "string",
                    description: "name of the case in spanish",
                    example: "2?? Trimestre",
                  },
                  en: {
                    type: "string",
                    description: "name of the case in english",
                    example: "2?? Trimestre",
                  },
                },
              },

              description: {
                type: "object",
                description: "description of the case",
                properties: {
                  es: {
                    type: "string",
                    description: "Case description in spanish",
                    example:
                      "El ofrecimiento de terapia en casos seleccionados disminuir?? en gran porcentaje la morbilidad perinatal y neonatal.",
                  },
                  en: {
                    type: "string",
                    description: "Case description in spanish",
                    example:
                      "El ofrecimiento de terapia en casos seleccionados disminuir?? en gran porcentaje la morbilidad perinatal y neonatal.",
                  },
                },
              },
              diagnostic: {
                type: "object",
                description: "diagnostic strings",
                properties: {
                  en: {
                    type: "string",
                    description: "Case diagnostic in english",
                    example:
                      "Como se puede observar en los distintos cortes del estudio, nos encontramos ante un caso de embarazo con curso sin anomal??as, se puede observar el corte de 4 c??maras, t??rax y abdomen lo que nos permite explorar de manera detallada  las diferentes estructuras y cual ser?? el  estado de normalidad.",
                  },

                  es: {
                    type: "string",
                    description: "Case description in spanish",
                    example:
                      "Como se puede observar en los distintos cortes del estudio, nos encontramos ante un caso de embarazo con curso sin anomal??as, se puede observar el corte de 4 c??maras, t??rax y abdomen lo que nos permite explorar de manera detallada  las diferentes estructuras y cual ser?? el  estado de normalidad.",
                  },
                },
              },

              thumbnail: {
                type: "string",
                description: "thumbnail url",
                example:
                  "https://fuve-medical-cases-dev.s3.us-east-2.amazonaws.com/Thumbnail/demo.png",
              },
              visibility: {
                type: "boolean",
                description: "shows if a case is visible or not",
                example: true,
              },
              category: {
                type: "object",
                description: "title of the case category",
                properties: {
                  en: {
                    type: "string",
                    description: "Case category in english",
                    example: "2nd Trimester",
                  },
                  es: {
                    type: "string",
                    description: "Case category in spanish",
                    example: "2do Trim",
                  },
                },
              },
              attachedFiles: {
                type: "object",
                description: "attachedFiles",
                properties: {},
              },

              debugVisibility: {
                type: "boolean",
                description: "shows if a case is visible in debug mode",
                example: false,
              },

              descriptionPreview: {
                type: "object",
                description: "short description of the case",
                properties: {
                  en: {
                    type: "string",
                    description:
                      "show the short description of the case in english",
                    example: "Femenino de 38 a??os G1",
                  },
                  es: {
                    type: "string",
                    description:
                      "show the short description of the case in spanish",
                    example: "Femenino de 38 a??os G1",
                  },
                },
              },
              hiddenTitle: {
                type: "object",
                description: "hidden title",
                properties: {
                  es: {
                    type: "string",
                    description: "Shows a hidden title in spanish",
                    example: "Sano",
                  },
                  en: {
                    type: "string",
                    description: "Shows a hidden title in english",
                    example: "Sano",
                  },
                },
              },
              demo: {
                type: "boolean",
                description: "shows if selected cases is a demo case",
                example: true,
              },
              views: {
                type: "object",
                description: "shows the available views of the case",
                properties: {
                  referenceUrl: {
                    type: "string",
                    description: "show a reference url to aws bucket",
                    example:
                      "  https://fuve-medical-cases-dev.s3.us-east-2.amazonaws.com/Thumbnail/demo_vista.png",
                  },
                  unityKey: {
                    type: "string",
                    description: "shows the unity key",
                    example: "MIELOMENINGOCELE_NOMBREDEVISTA_14",
                  },
                  visibility: {
                    type: "boolean",
                    description: "sets the visibility of the view",
                    example: true,
                  },
                  title: {
                    type: "object",
                    properties: {
                      es: {
                        type: "string",
                        description: "show the title of the view in spanish",
                        example: "Sagital",
                      },
                      en: {
                        type: "string",
                        description: "show the title of the view in english",
                        example: "Sagital",
                      },
                    },
                  },
                  fragments: {
                    type: "number",
                    description: "shows the number of fragments ",
                    example: 6,
                  },
                  thumbnail: {
                    type: "string",
                    description:
                      "shows the url of the tumbnail in aws s3 bucket",
                    example:
                      "  https://fuve-medical-cases-dev.s3.us-east-2.amazonaws.com/Thumbnail/demo_vista.png",
                  },
                  debugVisibility: {
                    type: "boolean",
                    description: "shows if the case is for debug",
                    example: true,
                  },
                },
              },
              author: {
                type: "string",
                description: "the uid of the use that uploaded the case",
                example: "MZ0U5v1omQyknQScuLKi",
              },

              quest: {
                type: "object",
                description:
                  "show the options for the test at the end of the case",

                properties: {
                  answer0: {
                    type: "object",
                    description: "options for the first answer",
                    properties: {
                      es: {
                        type: "string",
                        description: "shows the answer in spanish",
                        example: "Sano",
                      },
                      en: {
                        type: "string",
                        description: "shows the answer in english",
                        example: "Sano",
                      },
                    },
                  },

                  answer1: {
                    type: "object",
                    description: "options for the second answer",
                    properties: {
                      es: {
                        type: "string",
                        description: "shows the answer in spanish",
                        example: "Coraz??n izquierdo hipoplasico",
                      },
                      en: {
                        type: "string",
                        description: "shows the answer in spanish",
                        example: "Coraz??n izquierdo hipoplasico",
                      },
                    },
                  },

                  answer2: {
                    type: "object",
                    description: "options for the second answer",
                    properties: {
                      en: {
                        type: "string",
                        description: "shows the answer in english",
                        example:
                          "Doble tracto de salida del Ventr??culo derecho",
                      },
                      es: {
                        type: "string",
                        description: "shows the answer in english",
                        example:
                          "Doble tracto de salida del Ventr??culo derecho",
                      },
                    },
                  },
                  correct: {
                    type: "number",
                    description: "shows the correct answer in the array",
                    example: 0,
                  },
                },
              },
              lite: {
                type: "boolean",
                description: "show if the selected case is a lite case",
                example: false,
              },
              id: {
                type: "string",
                description: "shows the uid of the case",
                example: "1uXiwrMYCpGurx2RZ03z",
              },
            },
          },
          diagnostics: {
            type: "object",
            description: "case diagnostics",
            properties: {},
          },
        },
      },

      case: {
        type: "object",
        description: "an array from firebase describing the selected case",
        properties: {
          title: {
            type: "object",
            description: "title of the case in spanish and english",
            properties: {
              es: {
                type: "string",
                description: "name of the case in spanish",
                example: "2?? Trimestre",
              },
              en: {
                type: "string",
                description: "name of the case in english",
                example: "2?? Trimestre",
              },
            },
          },

          description: {
            type: "object",
            description: "description of the case",
            properties: {
              es: {
                type: "string",
                description: "Case description in spanish",
                example:
                  "El ofrecimiento de terapia en casos seleccionados disminuir?? en gran porcentaje la morbilidad perinatal y neonatal.",
              },
              en: {
                type: "string",
                description: "Case description in spanish",
                example:
                  "El ofrecimiento de terapia en casos seleccionados disminuir?? en gran porcentaje la morbilidad perinatal y neonatal.",
              },
            },
          },
          diagnostic: {
            type: "object",
            description: "diagnostic strings",
            properties: {
              en: {
                type: "string",
                description: "Case diagnostic in english",
                example:
                  "Como se puede observar en los distintos cortes del estudio, nos encontramos ante un caso de embarazo con curso sin anomal??as, se puede observar el corte de 4 c??maras, t??rax y abdomen lo que nos permite explorar de manera detallada  las diferentes estructuras y cual ser?? el  estado de normalidad.",
              },

              es: {
                type: "string",
                description: "Case description in spanish",
                example:
                  "Como se puede observar en los distintos cortes del estudio, nos encontramos ante un caso de embarazo con curso sin anomal??as, se puede observar el corte de 4 c??maras, t??rax y abdomen lo que nos permite explorar de manera detallada  las diferentes estructuras y cual ser?? el  estado de normalidad.",
              },
            },
          },

          thumbnail: {
            type: "string",
            description: "thumbnail url",
            example:
              "https://fuve-medical-cases-dev.s3.us-east-2.amazonaws.com/Thumbnail/demo.png",
          },
          visibility: {
            type: "boolean",
            description: "shows if a case is visible or not",
            example: true,
          },
          category: {
            type: "object",
            description: "title of the case category",
            properties: {
              en: {
                type: "string",
                description: "Case category in english",
                example: "2nd Trimester",
              },
              es: {
                type: "string",
                description: "Case category in spanish",
                example: "2do Trim",
              },
            },
          },
          attachedFiles: {
            type: "object",
            description: "attachedFiles",
            properties: {},
          },

          debugVisibility: {
            type: "boolean",
            description: "shows if a case is visible in debug mode",
            example: false,
          },

          descriptionPreview: {
            type: "object",
            description: "short description of the case",
            properties: {
              en: {
                type: "string",
                description:
                  "show the short description of the case in english",
                example: "Femenino de 38 a??os G1",
              },
              es: {
                type: "string",
                description:
                  "show the short description of the case in spanish",
                example: "Femenino de 38 a??os G1",
              },
            },
          },
          hiddenTitle: {
            type: "object",
            description: "hidden title",
            properties: {
              es: {
                type: "string",
                description: "Shows a hidden title in spanish",
                example: "Sano",
              },
              en: {
                type: "string",
                description: "Shows a hidden title in english",
                example: "Sano",
              },
            },
          },
          demo: {
            type: "boolean",
            description: "shows if selected cases is a demo case",
            example: true,
          },
          views: {
            type: "object",
            description: "shows the available views of the case",
            properties: {
              referenceUrl: {
                type: "string",
                description: "show a reference url to aws bucket",
                example:
                  "  https://fuve-medical-cases-dev.s3.us-east-2.amazonaws.com/Thumbnail/demo_vista.png",
              },
              unityKey: {
                type: "string",
                description: "shows the unity key",
                example: "MIELOMENINGOCELE_NOMBREDEVISTA_14",
              },
              visibility: {
                type: "boolean",
                description: "sets the visibility of the view",
                example: true,
              },
              title: {
                type: "object",
                properties: {
                  es: {
                    type: "string",
                    description: "show the title of the view in spanish",
                    example: "Sagital",
                  },
                  en: {
                    type: "string",
                    description: "show the title of the view in english",
                    example: "Sagital",
                  },
                },
              },
              fragments: {
                type: "number",
                description: "shows the number of fragments ",
                example: 6,
              },
              thumbnail: {
                type: "string",
                description: "shows the url of the tumbnail in aws s3 bucket",
                example:
                  "  https://fuve-medical-cases-dev.s3.us-east-2.amazonaws.com/Thumbnail/demo_vista.png",
              },
              debugVisibility: {
                type: "boolean",
                description: "shows if the case is for debug",
                example: true,
              },
            },
          },
          author: {
            type: "string",
            description: "the uid of the use that uploaded the case",
            example: "MZ0U5v1omQyknQScuLKi",
          },

          quest: {
            type: "object",
            description: "show the options for the test at the end of the case",

            properties: {
              answer0: {
                type: "object",
                description: "options for the first answer",
                properties: {
                  es: {
                    type: "string",
                    description: "shows the answer in spanish",
                    example: "Sano",
                  },
                  en: {
                    type: "string",
                    description: "shows the answer in english",
                    example: "Sano",
                  },
                },
              },

              answer1: {
                type: "object",
                description: "options for the second answer",
                properties: {
                  es: {
                    type: "string",
                    description: "shows the answer in spanish",
                    example: "Coraz??n izquierdo hipoplasico",
                  },
                  en: {
                    type: "string",
                    description: "shows the answer in spanish",
                    example: "Coraz??n izquierdo hipoplasico",
                  },
                },
              },

              answer2: {
                type: "object",
                description: "options for the second answer",
                properties: {
                  en: {
                    type: "string",
                    description: "shows the answer in english",
                    example: "Doble tracto de salida del Ventr??culo derecho",
                  },
                  es: {
                    type: "string",
                    description: "shows the answer in english",
                    example: "Doble tracto de salida del Ventr??culo derecho",
                  },
                },
              },
              correct: {
                type: "number",
                description: "shows the correct answer in the array",
                example: 0,
              },
            },
          },
          lite: {
            type: "boolean",
            description: "show if the selected case is a lite case",
            example: false,
          },
          id: {
            type: "string",
            description: "shows the uid of the case",
            example: "1uXiwrMYCpGurx2RZ03z",
          },
        },
      },
      uid: {
        type: "string",
        description: "user Firebase UID",
        example: "N49V2APfblXlSv3nr4zVhjC6nxv2",
      },
      user: {
        type: "object",
        properties: {
          uid: {
            type: "string",
            description: "user Firebase UID",
            example: "N49V2APfblXlSv3nr4zVhjC6nxv2",
          },
          firstName: {
            type: "string",
            description: "user firstName",
            example: "Alberto Alexis ",
          },
          lastName: {
            type: "string",
            description: "user lastName",
            example: "Dominguez Ruiz ",
          },
          premium: {
            type: "boolean",
            description: "user subscription type premium",
            example: false,
          },
          lite: {
            type: "boolean",
            description: "user subscription type lite",
            example: false,
          },
          photo: {
            type: "string",
            description: "photo url",
            example:
              "https://firebasestorage.googleapis.com/v0/b/fuve-c0512.appspot.com/o/avatars%2FN49V2APfblXlSv3nr4zVhjC6nxv2.jpg?alt=media&token=d9f4242f-8fc1-49da-b216-65a05bd66eb6",
          },
        },
      },
      answers: {
        type: "object",
        description: "answers from firebase of the given caseid",
        properties: {
          answer0: {
            type: "object",
            description: "show the answer in both languages",
            properties: {
              es: {
                type: "string",
                description: "language",
                example: "Sano",
              },
              en: {
                type: "string",
                description: "language",
                example: "Sano",
              },
            },
          },
          answer1: {
            type: "object",
            description: "show the answer in both languages",
            properties: {
              es: {
                type: "string",
                description: "language",
                example: "Coraz??n izquierdo hipoplasico",
              },
              en: {
                type: "string",
                description: "language",
                example: "Coraz??n izquierdo hipoplasico",
              },
            },
          },
          answer2: {
            type: "object",
            description: "show the answer in both languages",
            properties: {
              es: {
                type: "string",
                description: "language",
                example: "Doble tracto de salida del Ventr??culo derecho",
              },
              en: {
                type: "string",
                description: "language",
                example: "Doble tracto de salida del Ventr??culo derecho",
              },
            },
          },
          correct: {
            type: "number",
            description: "show the correct answer in the array",
            example: 0,
          },
        },
      },
      premium: {
        type: "boolean",
        description: "shows if a user is premium or not",
        example: true,
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
      removedSession: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "show response",
            example: "Disconection success",
          },
        },
      },
    },
  },
};
