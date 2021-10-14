const getCase = require("./get-case");
const getData = require("./get-data");
const deleteSession = require("./delete-session");
const getQuests = require("./get-quests");
const premiumStatus = require("./get-premium-status");
const remoteSession = require("./get-remote-session");
const syncMfm = require("./sync-mfm");
const caseProgress = require("./case-progress");
const currentCase = require("./current-case");
const appOnlineStatus = require("./app-online-status");
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
    "/syncmfm": {
      ...syncMfm,
    },
    "/caseProgress": {
      ...caseProgress,
    },
    "/currentCase": {
      ...currentCase,
    },
    "/appOnlineStatus": {
      ...appOnlineStatus,
    },
  },
};
