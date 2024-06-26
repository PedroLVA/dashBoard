import { Component, OnDestroy, OnInit, effect, signal } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline') ;
  private interval?: ReturnType<typeof setInterval>;

  constructor(){
    effect(() => {
      console.log('Server status changed to:', this.currentStatus())
    } )
  }

  ngOnInit(){
    setInterval(() => {
      const rnd = Math.random();{

        if(rnd < 0.5){
          this.currentStatus.set('online');
        }else if(rnd < 0.9){
          this.currentStatus.set('offline') ;  
        } else{
           this.currentStatus.set('unknown') ;  
        }
        
      }
    }, 5000)
  }

  ngOnDestroy(){
    clearTimeout(this.interval)
  }
}
