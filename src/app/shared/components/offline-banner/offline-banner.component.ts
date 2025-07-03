import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offline-banner',
  templateUrl: './offline-banner.component.html',
  styleUrls: ['./offline-banner.component.scss']
})
export class OfflineBannerComponent {
  @Input() isOffline: boolean | null = false;
}