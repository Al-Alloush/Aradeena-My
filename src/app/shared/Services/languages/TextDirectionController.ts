export class TextDirectionController{
  public textDirection: string;
  constructor(){
    this.checkDirection();
  }
  public checkDirection():void{
    const lang = localStorage.getItem('lang')
    if(lang === 'ar'){
      this.textDirection = 'rtl';
    }else if (lang === 'en'){
      this.textDirection = 'ltr';
    }
  }
}
