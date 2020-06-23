import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
import { JQUERY_TOKEN } from '../new-jquery.service';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private elementHtml: HTMLElement;
    @Input('modal-trigger') modalId: string;
    public $: any;

    constructor(
       // @Inject(JQ_TOKEN) private $: any,
        @Inject(JQUERY_TOKEN) private $factory: any,
        elementRef: ElementRef
    ) {
        this.elementHtml = elementRef.nativeElement;
    }

    ngOnInit() {
        this.$ = this.$factory();
        this.elementHtml.addEventListener('click', event => {
            this.$(`#${this.modalId}`).modal({});
        });

    }
}
