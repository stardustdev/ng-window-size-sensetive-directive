import {
  Directive,
  Input,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
} from "@angular/core";
import { WindowService } from "./window.service";

@Directive({
  selector: "[onlyForScreen]",
})
export class OnlyForScreenDirective implements OnChanges {
  private screen: string = "desktop";
  private curWindow: string;

  @Input()
  set onlyForScreen(val) {
    if (val) {
      this.screen = val;
    }
    this.updateView();
  }
  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private windowService: WindowService
  ) {}

  ngOnChanges() {
    this.windowService.currentWindow.subscribe((curWindow) => {
      this.curWindow = curWindow;
      this.updateView();
    });
  }

  updateView() {
    if (this.screen === this.curWindow) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
