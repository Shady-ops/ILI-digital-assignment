import { Component } from '@angular/core';
import { UserService, UserRole } from '../../services/user.service';
import { OfflineService } from '../../services/offline.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  roles = this.userService.roles;
  currentUserRole$ = this.userService.currentUserRole$;

  constructor(private userService: UserService, private offlineService: OfflineService) {}

  onRoleChange(event: Event): void {
    const selectedRole = (event.target as HTMLSelectElement).value as UserRole;
    this.userService.setRole(selectedRole);
  }

  onOfflineToggle(): void {
    this.offlineService.toggleOfflineMode();
  }
}