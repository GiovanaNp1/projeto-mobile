import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("282577308941815")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    IonicModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide:  AuthServiceConfig, useClass: IonicErrorHandler, useFactory: getAuthServiceConfigs}
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
