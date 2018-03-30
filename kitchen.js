'use strict'

class Kitchen {
    constructor(fridge, microwave) {
        this.fridge = fridge
        this.microwave = microwave
    }
}

class Fridge {
    constructor(haspower, iscool){
        this.haspower = haspower
        this.iscool = iscool
    }
    switchpower(){
        this.haspower = !this.haspower
        return this.haspower
    }
    keepcool(){
        this.iscool = !this.iscool
        return this.iscool
    }
}

class Microwave {
    constructor(haspower, cook){
        this.haspower = haspower
        this.cook = cook
    }
    switchpower(){
        this.haspower = !this.haspower
        return this.haspower
    }
    quickcook(){
        this.cook = !this.cook
        return this.cook
    }
}

const fridge = new Fridge(true)
const microwave = new Microwave(true)

console.log(fridge.switchpower(), fridge.keepcool())
console.log(microwave.switchpower(), microwave.quickcook())