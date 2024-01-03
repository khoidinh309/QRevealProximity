const yourIP = 'qreveal-proximity.azurewebsites.net'; // See the docs https://docs.abp.io/en/abp/latest/Getting-Started-React-Native?Tiered=No
const port  = 4200;
const apiUrl = `https://${yourIP}`;
const ENV = {
  dev: {
    apiUrl: apiUrl,
    oAuthConfig: {
      issuer: apiUrl,
      clientId: 'QRevealProximity_App',
      scope: 'offline_access QRevealProximity',
    },
    localization: {
      defaultResourceName: 'QRevealProximity',
    },
  },
  prod: {
    apiUrl: 'https://qreveal-proximity.azurewebsites.net/',
    oAuthConfig: {
      issuer: 'https://qreveal-proximity.azurewebsites.net/',
      clientId: 'QRevealProximity_App',
      scope: 'offline_access QRevealProximity',
    },
    localization: {
      defaultResourceName: 'QRevealProximity',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
