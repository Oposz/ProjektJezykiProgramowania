import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/shared/interfaces/repo.interface';

@Component({
  selector: 'app-repo[repo]',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent {
  @Input() repo!: Repo;


  constructor() {
  }
}
