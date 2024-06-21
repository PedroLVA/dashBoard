import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";

import { ServerComponent } from "./components/dashboard/server/server.component";
import { TrafficComponent } from "./components/dashboard/traffic/traffic.component";
import { TicketsComponent } from "./components/dashboard/tickets/tickets.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [ServerComponent, TrafficComponent, TicketsComponent, HeaderComponent]
})
export class AppComponent {
 
  
  
}
