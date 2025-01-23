import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, DoCheck {
  title: string = "Calculateur d'empreinte carbone";
  userName: string = "";
  menu: any[] = [
    { name: 'Home', url: '' },
    { name: 'Profile', url: '' }, // Le champ `url` sera mis à jour dynamiquement.
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.updateUserName();
    this.updateMenu();
  }

  ngDoCheck(): void {
    const previousUserName = this.userName;
    this.updateUserName();

    if (previousUserName !== this.userName) {
      this.updateMenu();
    }
  }

  updateUserName(): void {
    this.userName = this.userService.getUsername();
  }

  updateMenu(): void {
    this.menu = [
      { name: 'Home', url: '' },
      { name: 'Profile', url: `/profile/${this.userName}` },
    ];
  }

  logout() {
    console.log('test')
    this.userService.logout()
  }
}
