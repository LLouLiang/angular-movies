import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox'
// Date pick + Date
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
// tab module
import {MatTabsModule} from '@angular/material/tabs';
// Autocomplete module
import {MatAutocompleteModule} from '@angular/material/autocomplete'
// material table module
import {MatTableModule} from '@angular/material/table';
// Drag and Drop module
import {DragDropModule} from '@angular/cdk/drag-drop';
// input loading spinner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
// input angular material UI - PaginationModule
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,
    DragDropModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
