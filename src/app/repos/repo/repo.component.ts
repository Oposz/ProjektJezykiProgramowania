import {Component, Input} from '@angular/core';
import {Repo} from 'src/app/shared/interfaces/repo.interface';
import {LocalStorageService} from "../../core/service/local-storage.service";

@Component({
    selector: 'app-repo[repo]',
    templateUrl: './repo.component.html',
    styleUrls: ['./repo.component.scss']
})
export class RepoComponent {
    @Input() repo!: Repo;

    constructor(
        private readonly localStorageService: LocalStorageService
    ) {
    }

    addToFav(repo: Repo) {
        this.localStorageService.setItem(repo.id.toString(), JSON.stringify(repo))
    }

    removeFromFav(repo: Repo) {
        this.localStorageService.deleteItem(repo.id.toString())
    }

    inFavourite(repo: Repo) {
        return !!this.localStorageService.getItem(repo.id.toString())
    }

}
