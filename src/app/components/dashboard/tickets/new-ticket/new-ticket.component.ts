import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {

    @ViewChild('form') form?: ElementRef<HTMLFormElement>;
    //private formChild = viewChild<ElementRef<HTMLFormElement>>('form');

    ngOnInit() {
        
    }

    onSubmit(titleInput: string, textInput: string){
       
        console.dir(titleInput + ' ' + textInput);
        this.form?.nativeElement.reset();
    }

    ngAfterViewInit() {
        console.log('AfterViewInit');
       console.log(this.form?.nativeElement);
    }

}
