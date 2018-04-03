'use strict'

class Appliance {
    constructor(haspower) {
        this.haspower = haspower
    }
    switchpower() {
        this.haspower = !this.haspower
        return this.haspower
    }
}

class Kitchen {
    constructor(fridge, microwave) {
        this.fridge = fridge
        this.microwave = microwave
    }
}

class Fridge extends Appliance {
    constructor(haspower, iscool) {
        super(haspower)
        this.iscool = iscool
    }

    keepcool() {
        this.iscool = !this.iscool
        return this.iscool
    }
}

class Microwave extends Appliance {
    constructor(haspower, cook) {
        super(haspower)
        this.cook = cook
    }

    quickcook() {
        this.cook = !this.cook
        return this.cook
    }
}

const fridge = new Fridge(true, true)
const microwave = new Microwave(false, false)
const kitchen = new Kitchen(fridge, microwave)
const kitchen2 = new Kitchen(new Fridge(false), new Microwave(true))

console.log('kitchen2', 'The fridge is', kitchen2.fridge.switchpower(), kitchen2.fridge.keepcool(), kitchen2.microwave.switchpower(), kitchen2.microwave.quickcook())
console.log(kitchen.fridge.switchpower(), kitchen.fridge.keepcool(), kitchen.microwave.switchpower(), kitchen.microwave.quickcook())
