// logging.service.ts
//service is just a normal ts class
export class LoggingService {
  logStatusChange(status: string) {
    console.log('a server status changed, new status: '+status);
    
  }
}
