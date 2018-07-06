import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: [
      '../../node_modules/flag-icon-css/css/flag-icon.min.css'
    ],
})

export class AppComponent {
    user = {
        name: 'Arthur',
        age: 42
      };

      constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
      }
    
      switchLanguage(language: string) {
        this.translate.use(language);
      }
  }