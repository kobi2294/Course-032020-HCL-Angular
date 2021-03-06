import { TitlePresenterComponent } from './components/title-presenter/title-presenter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';
import { SelectorTemplateDirective } from './components/string-selector/selector-template.directive';

@NgModule({
  declarations: [
    AppComponent, 
    TitlePresenterComponent, 
    StringSelectorComponent, 
    SelectorTemplateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
