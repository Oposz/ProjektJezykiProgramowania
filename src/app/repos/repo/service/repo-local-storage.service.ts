import {Injectable} from '@angular/core';
import {LocalStorageService} from "../../../core/service/local-storage.service";
import {Repo} from "../../../shared/interfaces/repo.interface";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RepoLocalStorageService {

    static readonly LS_KEY_FOR_REPOS: string = 'repos'

    updateFavRepos: Subject<void> = new Subject<void>()
    private favRepos: { [key: string]: Repo } = {}

    constructor(
        private readonly localStorageService: LocalStorageService
    ) {
    }

    loadFavRepos() {
        const savedRepos: string | null = this.localStorageService.getItem(RepoLocalStorageService.LS_KEY_FOR_REPOS)

        if (savedRepos) {
            this.favRepos = JSON.parse(savedRepos)
        } else {
            this.favRepos = {}
        }
    }

    addRepoToFav(repoId: string, repo: Repo) {
        this.favRepos[repoId] = repo

        this.localStorageService.setItem(RepoLocalStorageService.LS_KEY_FOR_REPOS, JSON.stringify(this.favRepos))
        this.updateFavRepos.next();
    }

    removeRepoFromFav(repoId: string) {
        this.localStorageService.deleteItem(RepoLocalStorageService.LS_KEY_FOR_REPOS)
        delete this.favRepos[repoId]
        this.localStorageService.setItem(RepoLocalStorageService.LS_KEY_FOR_REPOS, JSON.stringify(this.favRepos))
        this.updateFavRepos.next();
    }

    getFavRepo(repoId: string): boolean {
        return repoId in this.favRepos
    }
}
