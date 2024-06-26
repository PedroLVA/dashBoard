import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, output, viewChild } from '@angular/core';
import { ControlComponent } from "../../../../shared/control/control.component";
import { ButtonComponent } from '../../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css',
    imports: [ControlComponent, ButtonComponent, FormsModule]
})
export class NewTicketComponent implements  AfterViewInit {

    @ViewChild('form') form?: ElementRef<HTMLFormElement>;
    @Output() add = new EventEmitter<{title: string, text: string}>();

    //add1 = output<{title: string, text: string}>();
    //private formChild = viewChild<ElementRef<HTMLFormElement>>('form');


    onSubmit(titleInput: string, textInput: string){
       this.add.emit({title: titleInput, text: textInput});
       
        console.dir(titleInput + ' ' + textInput);
        this.form?.nativeElement.reset();
    }

    ngAfterViewInit() {
        console.log('AfterViewInit');
       console.log(this.form?.nativeElement);
    }

}
