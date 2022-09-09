import {Computer} from './a.js';
export default class mac extends Computer {
    constructor(name, company) {
        super(name)
        this.company = company
    }
    logIn() {
        console.log(`you are being logged ${this.name}`);
    }
}
