import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public languageDirection = 'ltr'

  constructor() { }

  ngOnInit(): void {

  }


  //
  setLanguage(language: string){
    // get language from localStorage
    const lang = localStorage.getItem('lang');
    if(lang === null){
      localStorage.setItem('lang', 'en')
    }

    if(language == 'en') {
      this.languageDirection = 'ltr';
    } else if (language == 'ar') {
      this.languageDirection = 'rtl';
    }
    // stor language in localStor
    localStorage.setItem('lang', language)
    // refresh current page
    location.reload();

  }

}
