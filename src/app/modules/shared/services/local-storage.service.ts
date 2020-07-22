import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`LocalStorageService set: ${error}`);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(JSON.stringify(localStorage.getItem(key)));
    } catch (error) {
      console.error(`LocalStorageService get: ${error}`);
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`LocalStorageService removeItem: ${error}`);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`LocalStorageService clear: ${error}`);
    }
  }
}
