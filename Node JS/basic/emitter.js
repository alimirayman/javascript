class Emitter {
    constructor() {
        this.events = {};
    }
    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }
    emit(type) {
        if (this.events[type]) {
            this.events[type].forEach(function(element) {
                element();
            });
        }
    }
}

module.exports = Emitter
