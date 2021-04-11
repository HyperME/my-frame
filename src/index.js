import Lib from '../lib'
import router from './router'
import components from './components'

const settings = {
    router,
    components
}

const App = new Lib('#app', settings);

