import  makeApp from './app'
import database from './database'

const app = makeApp(database)


app.listen(8000, () => console.log('Server listening at PORT 8000'))
