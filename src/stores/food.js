import { action, observable } from 'mobx';

export default class FoodStore {
    @observable
    items = ['qwdwq'];

    @action
    addItem = (str) => this.items.push(str);
}
