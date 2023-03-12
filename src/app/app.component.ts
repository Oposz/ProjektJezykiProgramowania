import { HttpClient} from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repo } from './shared/interfaces/repo.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'recruitment-task-angular';
  searchDisabled: boolean = false;
  repos: Repo[] = [];
  currentUser: string = '';
  error: string = '';
  isLoading: boolean = false;
  isSearchDisabled: boolean = false;
  private sub = new Subscription;

  constructor(private readonly http: HttpClient) { }

  onPassSearch(value: string) {
    if (this.isLoading) return
    if (value !== this.currentUser) {
      this.isLoading = true;
      this.currentUser = value;
      this.isSearchDisabled = true;
      this.error="";
      this.sub = this.http.get<Repo[]>(`${environment.githubApi}/users/${value}/repos`).subscribe((data) => {
        this.processedRepos(data);
      },
      (error) => {
        this.handleError(error)
      })
    }
  }

  processedRepos(repos: Repo[]) {
    this.repos = repos.sort((a: Repo, b: Repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).reverse();
    this.isLoading = false;
    this.isSearchDisabled = false;
  }

  handleError(error:any){
    this.isLoading=false;

    this.searchDisabled=false;
    if(error.status===404){
      this.error="Nie ma takiego użytkownika."
    }else if(error.status>=500){
      this.error="Coś poszło nie tak ;("
    }
  }
  onSearchDisabled(value: boolean): void {
    this.searchDisabled = value
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}



