class InMemoryEventRepository {
    constructor(events = []) {
        this.events = events
    }

    isEmpty() {
        return this.events.length === 0
    }

    save(round) {
        this.events.push(round)
    }

    get() {
        return [...this.events]
    }
}



module.exports = {InMemoryEventRepository, Event};
