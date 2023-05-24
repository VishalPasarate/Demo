import { Component } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent {

   private storageKey = 'user';
 private defaultColor = '';
 userName = '';

 ngOnInit(): void {
   this.loadBackgroundPreferences();
 }
 private loadBackgroundPreferences(): void {
   this.userName = this.getBackgroundColor();
   window.document.body.style.backgroundColor = this.getBackgroundColor();
 }
 removePreferences(): void {
   localStorage.removeItem(this.storageKey);
   this.loadBackgroundPreferences();
 }
 saveName(color: string): void {
   localStorage.setItem(this.storageKey, color);
   this.loadBackgroundPreferences();
 }
 private getBackgroundColor(): string {
   return localStorage.getItem(this.storageKey) || this.defaultColor;
 }
}
