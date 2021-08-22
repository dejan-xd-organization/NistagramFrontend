import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Global {

    user: any;
    constructor() {
        this.user = null;
    }

    isOnlineOffline() {
        if (localStorage.getItem("user")) return true
        return false
    }

    getUserInLocalstorage() {
        if (this.isOnlineOffline() && this.user == null) {
            this.user = localStorage.getItem('user');
            this.user = JSON.parse(this.user);
        }
        return this.user;
    }
}
