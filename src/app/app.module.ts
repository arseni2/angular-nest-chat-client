import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { InputComponent } from './components/input/input.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { MessengerPageComponent } from './pages/messenger-page/messenger-page.component';
import { MessageComponent } from './components/message/message.component';
import { MyMessageComponent } from './components/my-message/my-message.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JwtModule } from '@auth0/angular-jwt';
import { messageReducer } from './store/message/message.reducer';
import { MessageEffects } from './store/message/message.effects';


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    InputComponent,
    SigninPageComponent,
    MessengerPageComponent,
    MessageComponent,
    MyMessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ authReducer, messageReducer }),
    EffectsModule.forRoot([AuthEffects, MessageEffects]),
    FormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
