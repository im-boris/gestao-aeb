import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable()
export abstract class BaseComponent implements OnDestroy {

    private _subscription = new Subscription();

    ngOnDestroy() {
        if(this._subscription) {
            this._subscription.unsubscribe();
        }
    }

    // <div *ngFor="let item of items; trackBy: trackByFn"></div>
    trackByFn(index: number, item: any) {
        return item.id;
    }

    addSubscription(sub: Subscription) {
        this._subscription.add(sub);
    }
}