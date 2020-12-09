import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  Component, 
  OnInit, 
  SimpleChanges, 
  Input} from '@angular/core';
  import { LogService } from '../log-service'

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {

  @Input() appTitle:any;

  constructor(private logger : LogService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log('ngOnChanges');
    for (const propName in changes) {
      if (propName === 'appTitle') {
        this.logger.log(`appTitle changed to "${this.appTitle}"`);
      } 
    }
  }
  ngOnDestroy(): void {
    this.logger.log('ngOnDestroy');
  }
  ngDoCheck(): void {
    this.logger.log('ngDoCheck');
  }
  ngAfterViewInit(): void {
    this.logger.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.logger.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    this.logger.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.logger.log('ngAfterContentChecked');
  }
  ngOnInit(): void {
    this.logger.log('ngOnInit');
  }

}
