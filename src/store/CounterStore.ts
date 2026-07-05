import { makeAutoObservable } from "mobx";

class CounterStore {
    count = 0;
    name = 'uttam';

    constructor(){
        makeAutoObservable(this);
    }
    increment(){
        this.count ++;
        console.log(this.count)
        this.name = 'himal';
        console.log(this.name)
    }
    decrement(){
        this.count --;
    }
    get double(){
        return this.count * 2
    }
}

export const counterStore = new CounterStore()