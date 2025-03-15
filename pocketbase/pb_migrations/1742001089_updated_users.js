/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role.name = 'service'",
    "deleteRule": "id = @request.auth.id || @request.auth.role.name = 'service'",
    "listRule": "id = @request.auth.id || @request.auth.role.name = 'service'",
    "updateRule": "id = @request.auth.id || @request.auth.role.name = 'service'",
    "viewRule": "id = @request.auth.id || @request.auth.role.name = 'service'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = 'service'",
    "deleteRule": "id = @request.auth.id || @request.auth.role = 'service'",
    "listRule": "id = @request.auth.id || @request.auth.role = 'service'",
    "updateRule": "id = @request.auth.id || @request.auth.role = 'service'",
    "viewRule": "id = @request.auth.id || @request.auth.role = 'service'"
  }, collection)

  return app.save(collection)
})
