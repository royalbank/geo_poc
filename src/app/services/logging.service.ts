import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  info(msg:string){
      console.log(msg);
  }
}
