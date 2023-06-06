import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LogoComponent} from './design/logo/logo.component';
import {HeaderComponent} from './design/header/header.component';
import {SearchBarComponent} from './repos/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ReposListComponent} from './repos/repos-list/repos-list.component';
import {RepoComponent} from './repos/repo/repo.component';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {ViewSwitcherComponent} from './design/view-switcher/view-switcher.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
        AppComponent,
        LogoComponent,
        HeaderComponent,
        SearchBarComponent,
        ReposListComponent,
        RepoComponent,
        ViewSwitcherComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgScrollbarModule,
        MatSlideToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
