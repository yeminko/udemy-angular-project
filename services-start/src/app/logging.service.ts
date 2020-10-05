import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    logStatusChange(state: string) {
        console.log('A server status changed, new status: ' + state);
    }
}