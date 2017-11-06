// Dependencies
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule
} from '@angular/material';
import {AppRoutingModule} from './app.routing';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FooterModule} from './shared/footer/footer.module';
import {SidebarModule} from './sidebar/sidebar.module';

// Components
import {AppComponent} from './app.component';
import {ModPasswordComponent} from './mod-password/mod-password.component';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
import { FacturasComponent } from './facturas/facturas.component';

// Pipes
import {SearchPipe} from './utils/pipes/search.pipe';

// Dialogs
import {DeleteDialogComponent} from './dialogs/delete-dialog/delete-dialog.component';
import {ClientDialogComponent} from './dialogs/client-dialog/client-dialog.component';
import {ConceptosDialogComponent} from './dialogs/conceptos-dialog/conceptos-dialog.component';

// Services
import {ClientService} from './utils/services/client.service';
import {UserService} from './utils/services/user.service';
import {NotifyService} from './utils/services/notify.service';
import {AuthGuard} from './utils/guards/auth.guard';
import {AuthenticationService} from './utils/services/authentication.service';
import {FacturaService} from './utils/services/factura.service';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
    declarations: [
        AppComponent,
        ModPasswordComponent,
        SearchPipe,
        ModPasswordComponent,
        DeleteDialogComponent,
        ClientDialogComponent,
        ConceptosDialogComponent,
        LoginComponent,
        FormComponent,
        FacturasComponent,
        ClientesComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NavbarModule,
        FooterModule,
        SidebarModule,
        RouterModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSelectModule,
        MatTooltipModule,
        MatAutocompleteModule
    ],
    providers: [
        AuthGuard,
        ClientService,
        AuthenticationService,
        UserService,
        FacturaService,
        NotifyService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        DeleteDialogComponent,
        ClientDialogComponent,
        ConceptosDialogComponent
    ]
})
export class AppModule {
}