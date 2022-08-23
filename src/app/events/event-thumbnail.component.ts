import { Component, EventEmitter, Input, Output } from "@angular/core";
 
@Component({
    selector:'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
    .green {color: #003300 !important }
    .thumbnail {min-height : 210px;}
    .bold { font-weight : bold; }
    .pad-left{margin-left:100px;}
    .well div{ color : white;}
    h2{color:black;}
    `]
})
export class EventThumbnailComponent{
    @Input() event:any
   // @Output() eventClicked=new EventEmitter(); // to pass data from parent to child
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return{green:isEarlyStart,bold:isEarlyStart}
    }
    getStartTimeClass2(){
        if(this.event && this.event.time === '8:00 am')
        return 'green bold'
        else
        return ''
    }
    getStartTimeClass3(){
        if(this.event && this.event.time === '8:00 am')
        return ['green', 'bold']
        else
        return []
    }
    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
          return {color: '#003300', 'font-weight': 'bold'}
        return {}
      }

  
    address:string = "Hyderabad"
}