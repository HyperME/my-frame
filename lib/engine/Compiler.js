
export default class MyCompiler {
    constructor() {
        this.regs = {
            pageView: /<page-view><\/page-view>/gm,
            componentTag: /<\/?my-[\s\S]+?>/gm, 
        }
    }

    compile({ page = 'home', path = '/', layout = 'main' }) {
        let layoutTemplate = require(`@layouts/${layout}.layout.html`);
        layoutTemplate = layoutTemplate
            .replace(pageView, page);

        return page
    }
}