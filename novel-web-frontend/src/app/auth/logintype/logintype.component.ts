import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logintype',
  standalone: true,
  imports: [],
  templateUrl: './logintype.component.html',
  styleUrl: './logintype.component.scss'
})
export class LogintypeComponent {
 constructor() {
 }
  private router=inject(Router);
 login(){
   this.router.navigate(['/login']);
 }
}
