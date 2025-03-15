/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.roles.name ?~ \"service\"",
    "deleteRule": "id = @request.auth.id || @request.auth.roles.name ?~ \"service\"",
    "listRule": "id = @request.auth.id || @request.auth.roles.name ?~ \"service\"",
    "updateRule": "id = @request.auth.id || @request.auth.roles.name ?~ \"service\"",
    "viewRule": "id = @request.auth.id || @request.auth.roles.name ?~ \"service\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "createRule": "\"service\" ?~ @request.auth.roles.name",
    "deleteRule": "id = @request.auth.id || \"service\" ?~ @request.auth.roles.name",
    "listRule": "id = @request.auth.id || \"service\" ?~ @request.auth.roles.name",
    "updateRule": "id = @request.auth.id || \"service\" ?~ @request.auth.roles.name",
    "viewRule": "id = @request.auth.id || \"service\" ?~ @request.auth.roles.name"
  }, collection)

  return app.save(collection)
})
