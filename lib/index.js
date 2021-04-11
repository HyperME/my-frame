import engine, { Router, Compiler, Component, Store } from './engine'

export default class MyLib {
    constructor(root, settings) {
        this.root = document.querySelector(root);
        this.root.innerHTML = 'Hello from my lib';
        this.router = new Router(settings.router);
        this.component = new Component(settings.components);
        this.compiler = new Compiler();
        this.store = new Store();

        this.render();
    }

    render() {
        console.log(this.router.currentRoute);

        let template = this.compiler.compile(this.router.currentRoute);
        this.root.innerHTML = template;
    }
}