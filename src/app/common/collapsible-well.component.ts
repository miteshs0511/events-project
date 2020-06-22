import { Component } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent {

    visible = false;

    toggleContent() {
        this.visible = !this.visible;
    }
}
