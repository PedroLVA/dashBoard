import { Component } from '@angular/core';
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

    onSubmit(titleElement: HTMLInputElement){
        const enteredTitle = titleElement.value;
        console.dir(enteredTitle);
    }

}
