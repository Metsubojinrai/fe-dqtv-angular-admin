import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AppCore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44365',
    redirectUri: baseUrl,
    clientId: 'AppCore_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone AppCore',
  },
  apis: {
    default: {
      url: 'https://localhost:44339',
      rootNamespace: 'ASP.AppCore',
    },
  },
} as Environment;
