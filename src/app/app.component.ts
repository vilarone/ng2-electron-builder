import { Component } from '@angular/core';
import { ElectronEventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public lang: string;
  constructor(){
    ElectronEventService.on('changeSample').subscribe((e: any) => {
        this.changeSample({ target: { value: e.detail.value } });
      });
  }
  changeSample(e: any) {
    let lang: string = "none";
    if (e && e.target) {
      lang = e.target.value;
    }
    console.log(`Language change: ${lang}`);
    this.lang =lang;
  }
}
