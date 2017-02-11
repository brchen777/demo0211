import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  filter_type: string = 'All';

  private _todos: any[];
  get todos(): any[] {
    return this._todos;
  }

  @Input()
  set todos(value: any[]) {
    this._todos = value;
  }

  @Output()
  clearCompleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  get active_items() {
    return this.todos.filter(v => !v.done).length;
  }

  btnClear() {
    this.clearCompleted.emit();
  }
}
