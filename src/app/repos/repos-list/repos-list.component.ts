import {OnDestroy} from '@angular/core';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Repo} from 'src/app/shared/interfaces/repo.interface';
import {ViewControllerService} from "../../core/service/view-controller.service";
import {filter} from "rxjs";
import {LocalStorageService} from "../../core/service/local-storage.service";

@Component({
    selector: 'app-repos-list',
    templateUrl: './repos-list.component.html',
    styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit, OnDestroy {
    @Input() repos: Repo[] = [];
    @Input() isSearchDisabled!: boolean;
    @Input() error!: string;
    @Input() isLoading!: boolean;
    @Input() userName!: string;
    @Output() searchDisabled = new EventEmitter<boolean>();

    favRepos: Repo[] = []

    constructor(
        public readonly viewControllerService: ViewControllerService,
        private readonly localStorageService: LocalStorageService
    ) {
    }

    ngOnInit() {
        this.viewControllerService.favouriteView
            .pipe(filter((fav) => fav))
            .subscribe(() => {
                this.updateFavRepos()
            })
    }

    private updateFavRepos() {
        this.favRepos = [];
        const item = this.localStorageService.getItem('repos')
        if (item) {
            const repos = JSON.parse(item)
            for (let repo in repos) {
                this.favRepos.push(repos[repo])
            }
        }
    }

    ngOnDestroy() {
        this.viewControllerService.favouriteView.unsubscribe();
    }
}
