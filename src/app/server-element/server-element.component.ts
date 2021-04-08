import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true })
  heading: ElementRef;

  @ContentChild('contentParagraph', { static: true })
  contentParagraph: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('Text content: ' + this.heading.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('Text content: ' + this.heading.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
