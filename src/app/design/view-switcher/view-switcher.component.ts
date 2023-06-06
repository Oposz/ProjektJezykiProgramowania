import {Component} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {ViewControllerService} from "../../core/service/view-controller.service";


@Component({
    selector: 'app-view-switcher',
    templateUrl: './view-switcher.component.html',
    styleUrls: ['./view-switcher.component.scss']
})
export class ViewSwitcherComponent {

    constructor(
        private readonly viewControllerService: ViewControllerService
    ) {
    }

    changeView(event: MatSlideToggleChange) {
        this.viewControllerService.changeView(event.checked)
    }
}
