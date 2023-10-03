import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  @Input() title: string = '';
  @Output() addEvent: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChange) {
    if (this.title) return;
    // @ts-ignore
    this.title = changes.title.cuurentValue;
  }

  add() {
    this.addEvent.emit(this.title);
  }
}
