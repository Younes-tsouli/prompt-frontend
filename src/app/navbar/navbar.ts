import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isDark = signal(false);

  toogleDarkMode() {
    this.isDark.update((prev) => !prev);
    document.documentElement.classList.toggle('app-dark');
  }
}
