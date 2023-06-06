import {Component, Input} from '@angular/core';
import {Repo} from 'src/app/shared/interfaces/repo.interface';
import {RepoLocalStorageService} from "./service/repo-local-storage.service";

@Component({
    selector: 'app-repo[repo]',
    templateUrl: './repo.component.html',
    styleUrls: ['./repo.component.scss']
})
export class RepoComponent {
    @Input() repo!: Repo;

    constructor(
        private readonly repoLocalStorageService: RepoLocalStorageService
    ) {
    }

    addToFav(repo: Repo) {
        this.repoLocalStorageService.addRepoToFav(repo.id.toString(), repo)
    }

    removeFromFav(repo: Repo) {
        this.repoLocalStorageService.removeRepoFromFav(repo.id.toString())
    }

    inFavourite(repo: Repo) {
        return this.repoLocalStorageService.getFavRepo(repo.id.toString())
    }

}
