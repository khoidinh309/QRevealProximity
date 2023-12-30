const yourIP = '192.168.137.1'; // See the docs https://docs.abp.io/en/abp/latest/Getting-Started-React-Native?Tiered=No
const port  = 4200;
const apiUrl = `http://${yourIP}:${port}`;
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
    apiUrl: 'http://192.168.137.1:4200',
    oAuthConfig: {
      issuer: 'http://192.168.137.1:4200',
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
