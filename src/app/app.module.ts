import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WindowService } from "./core/window.service";
import { OnlyForScreenDirective } from "./core/only-for-screen.directive";

@NgModule({
  declarations: [AppComponent, OnlyForScreenDirective],
  imports: [BrowserModule, FormsModule],
  providers: [WindowService],
  bootstrap: [AppComponent],
})
export class AppModule {}
