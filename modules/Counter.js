export class Counter {
    constructor() {
        this.currentValue = 0
        this.listener;
    }

    increment() {
        this.currentValue += 1
        this.trigger()
    }

    decrement() {
        this.currentValue -= 1
        this.trigger()
    }

    reset() {
        this.currentValue = 0
        this.trigger()
    }

    onChange(func) {
        this.listener = func
    }

    trigger() {
        this.listener(this.currentValue) 
    }
}