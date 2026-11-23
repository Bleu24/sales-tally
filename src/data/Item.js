export class Item {
    #id;
    #store_id;
    #name;
    #price;
    #category;
    #stock_count;

    constructor(id, store_id, name, price, category, stock_count) {
        this.#id = id;
        this.#store_id = store_id;
        this.#name = name;
        this.#price = price;
        this.#category = category;
        this.#stock_count = stock_count;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get store_id() {
        return this.#store_id;
    }

    set store_id(store_id) {
        this.#store_id = store_id;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price;
    }

    get category() {
        return this.#category;
    }

    set category(category) {
        this.#category = category;
    }

    get stock_count() {
        return this.#stock_count;
    }

    set stock_count(stock_count) {
        this.#stock_count = stock_count;
    }
}