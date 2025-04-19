
/** @jsx jsx */
/** @jsxImportSource hono/jsx */
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import Page from './views/page.tsx'


const app = new Hono()

app.use('*', serveStatic({ root: './public' }))


app.get('/', (c) => {
  return c.html(Page("hono and react template with nodeJS "))
})


app.get('*', (c) => {
  return c.text('404 - Not Found', 404)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
