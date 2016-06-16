import {Component, ViewChild, ElementRef} from "@angular/core";
import {AnimationCurve} from "ui/enums";
import {Page} from "ui/page";
import {View} from "ui/core/view";
import {setTimeout} from "timer"

@Component({
    selector: "my-app",
    templateUrl:"app.component.html",
})
export class AppComponent {
    public counter: number = 16;
    
    @ViewChild("container") container: ElementRef;
    @ViewChild("second") second: ElementRef;
    
    public isItemVisible:boolean=false;
    public isItemVisibleFirst:boolean=true;
    
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public showsecondline() {
        let container = <View>this.container.nativeElement;
        let second = <View>this.second.nativeElement;
        var  that =this;
        container.animate({
            translate: { x: 0, y: -100},    
            duration: 1000,
            curve: AnimationCurve.easeIn
        })
        .then(function(){
            that.isItemVisibleFirst=false;
            second.translateY=1000;
            that.isItemVisible=true
            setTimeout(()=>{
                second.animate({
                    translate: { x: 0, y:0},    
                    duration: 500,
                    curve: AnimationCurve.easeIn
                })
            }, 500)
            
        });
        
    }
}
