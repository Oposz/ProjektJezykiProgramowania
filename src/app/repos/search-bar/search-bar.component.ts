import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() instruction: string = '';
  @Input() defaultUser: string = '';
  @Input() searchDisabled: boolean = false;
  @Output() search = new EventEmitter<string>();

  searchInput = new FormControl('', [Validators.required]);


  constructor() { }

  ngOnInit(): void {
  }

  onSearchSubmit(): void {
    if (this.searchInput.valid && this.searchInput.value) {
      this.search.emit(this.searchInput.value);
    }
  }
}
