import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { ControlComponent } from "../../../../shared/control/control.component";
import { ButtonComponent } from '../../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ControlComponent, ButtonComponent, FormsModule]
})
export class NewTicketComponent {

    @ViewChild('form') form?: ElementRef<HTMLFormElement>;
    //private formChild = viewChild<ElementRef<HTMLFormElement>>('form');

    onSubmit(titleInput: string, textInput: string){
       
        console.dir(titleInput + ' ' + textInput);
        this.form?.nativeElement.reset();
    }

}
