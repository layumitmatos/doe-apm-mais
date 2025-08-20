import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.77e84651551349d68041d296519d272c',
  appName: 'doe-apm-mais',
  webDir: 'dist',
  server: {
    url: 'https://77e84651-5513-49d6-8041-d296519d272c.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#2563eb',
      showSpinner: false,
    },
  },
};

export default config;