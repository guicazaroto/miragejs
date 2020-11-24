import { createServer, Model, Factory, Response } from "miragejs"
import faker from 'faker'
import products from './mocks/products.json'

export function makeServer ({ environment = "development" } = {}) {
  return createServer({
    environment,
    models: {
      user: Model,
      product: Model
    },
    factories: {
      user: Factory.extend({
        name () {
          return faker.name.findName()
        },
        email () {
          return faker.internet.email()
        }
      })
    },
    fixtures: {
      products
    },
    seeds (server) {
      // server.create('user', { id: 1, name: 'Guilherme Cazaroto' })
      server.createList('user', 3)
      server.loadFixtures()
    },
    routes() {
      this.namespace = 'api'

      // this.get("/users", (schema) => {
      //   return schema.users.all()
      // })
      
      // caso a rota tenha o mesmo nome que a api podemos simplificar.
      // resource cria os métodos básicos de uma API
      
      this.resource('users')

      // simular servidor caindo
      this.get('about', () => {
        return new Response(500, {}, 'Internal Error Server')
      })

      this.resource('products')
    },
  })
}
