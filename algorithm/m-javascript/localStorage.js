class LocalStorageSimulation {
    constructor() {
        this.storage = {}
    }
    getItem(key) {
        return this.storage[key]
    }
    setItem(key, value) {
        this.storage[key] = value
    }
    deleteItem(key) {
        delete this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}