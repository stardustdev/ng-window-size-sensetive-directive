import { Component, OnInit } from "@angular/core";
import { WindowService } from "./core/window.service";
import { IConfig } from "./core/config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [WindowService],
})
export class AppComponent implements OnInit {
  title = "test";
  private config: IConfig;

  constructor(private windowService: WindowService) {}

  ngOnInit() {
    this.config = { mobile: 320, tablet: 640 };
    this.windowService.setConfig(this.config);
  }
}
