import { Component } from '@angular/core';
import { OfflineService } from './core/services/offline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isOffline$ = this.offlineService.isOffline$;

  constructor(private offlineService: OfflineService) {}
}
