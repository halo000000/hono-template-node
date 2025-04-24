/** @jsx jsx */
/** @jsxImportSource hono/jsx */
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import Page from './views/page.tsx'
import 'dotenv/config';
import { z } from "zod";

const app = new Hono()

app.use('*', serveStatic({ root: './public' }))


app.get('/', (c) => {
  return c.html(Page("hono and react template with nodeJS "))
})

app.get('/:id', (c) => {
  const schema = z.object({
    id: z.coerce.number().int().positive(),
  });
  const result = schema.safeParse({ id: c.req.param('id') });
  if (!result.success) {
    return c.html('<h1>404 - Not Found<h1/>', 404)
  }

  return c.html("<h1>the id is " + result.data.id +" and it is valid <h1/> ")
})


app.get('*', (c) => {
  return c.text('404 - Not Found', 404)
})

serve({
  fetch: app.fetch,
  port: process.env.PORT || 3000,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
