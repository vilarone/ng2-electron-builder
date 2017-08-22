import { Component } from '@angular/core';
import { ElectronEventService } from './event.service';
import { remote } from 'electron';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  errorbox = { title: 'sample title', content: 'samplecontent'};
  typebox = ['none', 'info', 'error', 'question', 'warning'];
  // typebox = [{value: 'none', label: 'none'}, {value: 'info', label: 'info'}, {value: 'error', label: 'error'}, {value: 'question', label: 'question'}, {value: 'warning', label: 'warning'}];
  optionsmbox = {
    type: 'info',
    buttons: ['Custom Button', 'Cancel', 'OK'],
    title: 'Title',
    message: 'Message'
  };
  public lang: string;
  constructor(){
    ElectronEventService.on('changeSample').subscribe((e: any) => {
        this.changeSample({ target: { value: e.detail.value } });
      });
  }
  openErrorBox(title, content) {
    remote.dialog.showErrorBox(title, content);
  }
  openMessageBox(options) {
    remote.dialog.showMessageBox(options);
  }
  openOpenDialog(){
    remote.dialog.showOpenDialog({});
  }

  changeSample(e: any) {
    // tslint:disable-next-line:no-inferrable-types
    let lang: string = 'none';
    if (e && e.target) {
      lang = e.target.value;
    }
    console.log(`Language change: ${lang}`);
    this.lang =lang;
  }
}
