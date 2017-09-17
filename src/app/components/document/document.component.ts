import { Component, OnInit } from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from  '../../store';
import {ACTION} from  '../../action';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  counter:number=0;
  constructor(private ngRedux: NgRedux<IAppState>) { 
    ngRedux.subscribe(()=>{this.counter=ngRedux.getState().counter});

  }

  ngOnInit() {
  }

  increment(){
    this.ngRedux.dispatch({type:ACTION.INCREMENT});
  }

}
