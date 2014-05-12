var server = require('json-server')

var port = process.env.PORT || 3000 

function reset() {
  server.low.load('data.json')
}

server.low.autoSave = false
server.low.on('update', reset)
server.low.on('remove', reset)
server.low.on('add', reset)

server.listen(port, function() {
  console.log('JSONPlaceholder listening on http://localhost:' + port)
  reset()
})
