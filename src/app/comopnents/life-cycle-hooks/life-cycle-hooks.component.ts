import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css'],
})
export class LifeCycleHooksComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy

  constructor() {
    console.log("constructor id - > 0");
    
  }

  ngOnInit() {
    console.log('ng on init id - > 1');
  }
  ngOnChanges() {
    console.log('ng on changes id - > 2');
  }
  ngDoCheck() {
    console.log('ng do check id - > 3');
  }
  ngAfterContentInit() {
    console.log('ng after content init id - > 4');
  }

  ngAfterContentChecked() {
    console.log('ng after content checked id - > 5');
  }

  ngAfterViewInit() {
    
    console.log('ng after view init id - > 6');
  }
  ngAfterViewChecked() {
    console.log('ng after view checked id - > 7');
  }
  ngOnDestroy() {
    console.log('ng on destroy id - > 8');
  }
}
