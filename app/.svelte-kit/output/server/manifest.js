export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Dm9hLuML.js",app:"_app/immutable/entry/app.DxhosX0D.js",imports:["_app/immutable/entry/start.Dm9hLuML.js","_app/immutable/chunks/DbwSCBos.js","_app/immutable/chunks/BvNlo7s9.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/entry/app.DxhosX0D.js","_app/immutable/chunks/BvNlo7s9.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DI7LpqLx.js","_app/immutable/chunks/C_3QkQkA.js","_app/immutable/chunks/BenLlawl.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BJ0lMmeX.js","_app/immutable/chunks/DpXYVjcI.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/hooks",
				pattern: /^\/hooks\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
