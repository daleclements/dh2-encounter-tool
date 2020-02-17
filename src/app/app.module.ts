import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//My Components
import { EncounterComponent } from './encounter/encounter.component';
import { ParticipantCardComponent } from './participant-card/participant-card.component';
import { ParticipantEditorDialogComponent } from './participant-editor-dialog/participant-editor-dialog.component';
import { EncounterTableComponent } from './encounter-table/encounter-table.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { InfoViewComponent } from './info-view/info-view.component';


@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent,
    ParticipantCardComponent,
    ParticipantEditorDialogComponent,
    EncounterTableComponent,
    NavigationBarComponent,
    CardsViewComponent,
    TableViewComponent,
    InfoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    //Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule
  ],
  entryComponents: [ParticipantEditorDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
