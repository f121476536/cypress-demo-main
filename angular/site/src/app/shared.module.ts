import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MAT_TOOLTIP_DEFAULT_OPTIONS} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';

const SHARED_DEPENDENCIES = [
  // Angular imports
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  // Material imports
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatRadioModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatButtonToggleModule,
  
  // Other 3rd party modules
  FlexLayoutModule,
  RouterModule
];

@NgModule({
  imports: SHARED_DEPENDENCIES,
  exports: SHARED_DEPENDENCIES,
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: MAT_TOOLTIP_DEFAULT_OPTIONS,
    },
  ],
})
export class SharedModule {}
