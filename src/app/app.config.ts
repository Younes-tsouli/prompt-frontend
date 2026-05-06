import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { definePreset } from '@primeuix/themes';
import { provideHttpClient, withFetch } from '@angular/common/http';

// On définit ton preset personnalisé ici
const MyPinkPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{pink.50}',
      100: '{pink.100}',
      200: '{pink.200}',
      300: '{pink.300}',
      400: '{pink.400}',
      500: '#ec4899', // Ta couleur : rgb(236, 72, 153)
      600: '{pink.600}',
      700: '{pink.700}',
      800: '{pink.800}',
      900: '{pink.900}',
      950: '{pink.950}',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch() 
    ),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: MyPinkPreset,
        options: {
          darkModeSelector: '.app-dark', // PLUS DE DARK MODE NON SOUHAITE
        },
      },
    }),
  ],
};
