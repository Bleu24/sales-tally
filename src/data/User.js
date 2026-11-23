class User {

    #id;
    #store_id;
    #userType;


    constructor(id, store_id, userType) {
        this.#id = id;
        this.#store_id = store_id;
        this.#userType = userType;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        if (typeof id !== "string") throw new Error("Id not a string");
        this.#id = id;
    }

    get store_id() {
        return this.#store_id;
    }

     set store_id(store_id) {
        if (typeof store_id !== "string") throw new Error("Id not a string");
        this.#store_id = store_id;
    }

    get userType() {
        return this.#userType;
    }

    set userType(userType) {
        if(userType !== "staff" || userType !== "owner" && (typeof userType !== "string")) throw new Error("userType not a string OR incorrect value");
        this.#userType = userType;
    }

    
}

