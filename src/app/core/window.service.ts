import { Injectable, DoCheck, OnChanges, NgZone } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
import { IConfig } from "./config";

@Injectable()
export class WindowService {
  private config: IConfig;
  private currentWindowSubject = new BehaviorSubject<any>({});
  public currentWindow = this.currentWindowSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor(private ngZone: NgZone) {
    window.onresize = (e) => {
      this.ngZone.run(() => this.updateView());
    };
  }

  setConfig(config: IConfig) {
    this.config = config;
    this.updateView();
  }

  updateView() {
    let curWindow = "desktop";
    if (window.innerWidth < this.config.mobile) {
      curWindow = "mobile";
    } else if (window.innerWidth < this.config.tablet) {
      curWindow = "tablet";
    }
    this.currentWindowSubject.next(curWindow);
  }
}
