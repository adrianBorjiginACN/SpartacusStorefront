import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
      baseSite: ['electronics-spa'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '3.4'
    }
  }), provideConfig({
    checkout: {
      guest: true
    }
  }), provideConfig({
    routing: {
      routes: {
          product: { 
            paths: [
              'cameras/:name/:productCode',
            ] 
          }
      }
  }
  }), provideConfig({
    layoutSlots: {
      header: {
        lg: {
          slots: [
            'SiteContext',
            'SiteLogin',
            'MiniCart',
            'SiteLogo',
            'NavigationBar',
            'SearchBox',
          ],
        },
      }
    }
  })]
})
export class SpartacusConfigurationModule { }
