export class LoggingService {
    logStatusChange(state: string) {
        console.log('A server status changed, new status: ' + state);
    }
}