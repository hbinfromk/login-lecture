"use strict";

class UserStorage {
    static #users = {
        id: ["hi","hihi","hihihi"],
        psword: ["1","22","333"],
        name: ["혜","빈","hi"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;