const getCase = require("./get-case");
const getData = require("./get-data");
const deleteSession = require("./delete-session");
const getQuests = require("./get-quests");
const premiumStatus = require("./get-premium-status");
const remoteSession = require("./get-remote-session");

module.exports = {
  paths: {
    "/getcase": {
      ...getCase,
    },
    "/getdata": {
      ...getData,
    },
    "/deletesession": {
      ...deleteSession,
    },
    "/quests": {
      ...getQuests,
    },
    "/premiumStatus": {
      ...premiumStatus,
    },
    "/remoteSession": {
      ...remoteSession,
    },
  },
};
