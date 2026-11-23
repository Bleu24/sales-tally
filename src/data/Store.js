export class Store {
    #id;
    #owner_id;
    #name;
    #currency;

    constructor(id, owner_id, name, currency) {
        this.#id = id;
        this.#owner_id = owner_id;
        this.#name = name;
        this.#currency = currency;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get owner_id() {
        return this.#owner_id;
    }

    set owner_id(owner_id) {
        this.#owner_id = owner_id;
    }
    
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get currency() {
        return this.#currency;
    }

    set currency(currency) {
        this.#currency = currency;
    }
}