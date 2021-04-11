
export default class MyRouter {
    constructor(routes) {
        this.routes = routes;
        this.current = routes[0];
    }

    get current() {
        return this.current
    }

    set current(currentPath = window.location.pathname) {
        this.current = this.routes.find(r => r.path === currentPath) || false;
    }
}