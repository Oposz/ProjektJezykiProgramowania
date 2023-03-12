import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() searchDisabled:boolean = false
  @Output() passSearch = new EventEmitter<string>()
  instruction: string = "Wpisz nazwę użytkownika repo"
  defaultUser: string = "oposz"

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(value:string):void {
    this.passSearch.emit(value)
  }

}
