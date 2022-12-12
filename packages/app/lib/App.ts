import * as path from 'path'

export class App {
    public start() {
        console.log("Hello World!")
        const module = path.join(__dirname, '..', 'migration')
        const {default: Migration} = require(module)
        const migrator = new Migration()
        migrator.run()
    }
}
