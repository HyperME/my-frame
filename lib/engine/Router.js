
export default class MyRouter {
    constructor(routes) {
        this.routes = routes;
        this.current = routes[0];
    }

    get currentRoute() {
        return this.current
    }

    set currentRoute(currentPath) {
        let result = this.routes.find(r => r.path === currentPath) || false;
        if(result) this.current = result;
    }
}