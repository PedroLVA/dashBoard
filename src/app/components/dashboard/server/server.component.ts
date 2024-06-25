import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor(){
  }

  ngOnInit(){
    setInterval(() => {
      const rnd = Math.random();{

        if(rnd < 0.5){
          this.currentStatus = 'online';
        }else if(rnd < 0.9){
          this.currentStatus = 'offline';  
        } else{
           this.currentStatus = 'unknown';  
        }
        
      }
    }, 5000)
  }

  ngOnDestroy(){
    clearTimeout(this.interval)
  }
}
