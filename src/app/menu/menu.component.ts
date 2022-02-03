import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Option } from "../core/interfaces/option.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {

  @Input() theme: Option | undefined;
  @Input() options: Array<Option> | undefined;

  @Output() themeChange: EventEmitter<Option> = new EventEmitter<Option>();

  ngOnChanges() {
    console.log(this.options);
  }

  changeTheme(themeToSet: Option) {
    this.themeChange.emit(themeToSet);
  }
}
