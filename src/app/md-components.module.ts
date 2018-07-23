import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,

  MatChipsModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule,
  MatCardModule,
  
  MatListModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  exports: [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatTabsModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
  ]
})
export class MatComponentsModule { }
