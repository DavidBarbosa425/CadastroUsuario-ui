import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {}

  showSuccess(summary: string, detail: string) {
    this.messageService.add({ severity: 'success', summary, detail });
  }

  showError(summary: string, detail: string) {
    this.messageService.add({ severity: 'error', summary, detail });
  }

  showInfo(summary: string, detail: string) {
    this.messageService.add({ severity: 'info', summary, detail });
  }

  showWarn(summary: string, detail: string) {
    this.messageService.add({ severity: 'warn', summary, detail });
  }

  showCustom(summary: string, detail: string, severity: string = 'custom') {
    this.messageService.add({ severity, summary, detail });
  }

  clear() {
    this.messageService.clear(); 
  }
}