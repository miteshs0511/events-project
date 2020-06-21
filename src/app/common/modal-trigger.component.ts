import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
// import { JQ_TOKEN } from './jQuery.service';
import $ from 'jquery';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private elementHtml: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(
        // @Inject(JQ_TOKEN) private $: any,
        elementRef: ElementRef
    ) {
        this.elementHtml = elementRef.nativeElement;
    }

    ngOnInit() {
        this.elementHtml.addEventListener('click', event => {
           $(document).ready(() => {
       
        });
        });
    }
}
