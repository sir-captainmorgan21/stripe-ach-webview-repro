import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'stripe.ach.webview.repro',
  appName: 'stripe-ach-webview-repro',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
