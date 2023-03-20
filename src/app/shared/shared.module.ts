// -- Angular Modules
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// -- Common Components
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { InputTextComponent } from "./components/input-text/input-text.component";

// -- Pipes
import { BoolPipe } from "./pipes/bool.pipe";
import { ReuniaoPipe } from "./pipes/reuniao.pipe";

// -- Directives

// -- PrimeNG Modules
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from "primeng/calendar";
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';


const COMPONENTS = [NotFoundComponent, InputTextComponent,];

const PIPES = [BoolPipe, ReuniaoPipe,];

const ANGULAR_MODULES = [RouterModule, CommonModule, ReactiveFormsModule, 
                         FormsModule,];

const PRIMENG_MODULES = [CardModule, RadioButtonModule, CheckboxModule, DropdownModule,
                          ToastModule, TableModule, InputTextModule, DialogModule,
                          ButtonModule, InputNumberModule, StepsModule, CalendarModule,
                          SidebarModule, MenuModule, MegaMenuModule, DynamicDialogModule,
                          InputTextareaModule, FieldsetModule,];

@NgModule({
    declarations: [...PIPES, ...COMPONENTS],
    imports: [...ANGULAR_MODULES, ...PRIMENG_MODULES],
    exports: [...ANGULAR_MODULES, ...PRIMENG_MODULES, ...PIPES, ...COMPONENTS],
    providers: []
})
export class SharedModule {}