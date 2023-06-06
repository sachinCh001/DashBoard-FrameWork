import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor ( private api : ApiService) {}

  user: string = 'Sachin';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }
  setMenuToggled(){
    this.api.isOpen = !this.api.isOpen;
  }

}
