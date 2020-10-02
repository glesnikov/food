import { action, observable } from 'mobx';

export default class FoodStore {
    items = observable(['qwdwq']);

    addItem = action((str) => this.items.push(str));
}
