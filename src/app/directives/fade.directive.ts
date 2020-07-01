import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appFade]",
})
export class FadeDirective {
  constructor(private element: ElementRef) {}

  @Input() myClassToAdd: string;
  @Input("appFade") elementIdToReach: string;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const elementOffsetTop = document.getElementById("toReach").offsetTop;
    if (elementOffsetTop <= window.pageYOffset) {
      this.element.nativeElement.classList.add(this.myClassToAdd);
    } else {
      this.element.nativeElement.classList.remove(this.myClassToAdd);
    }
  }
}
