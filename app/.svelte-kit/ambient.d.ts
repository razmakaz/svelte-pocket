
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const PRIVATE_POCKETBASE_SERVICE_USERNAME: string;
	export const PRIVATE_POCKETBASE_SERVICE_PASSWORD: string;
	export const npm_package_dependencies_zod: string;
	export const npm_package_devDependencies__eslint_compat: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_package_devDependencies__testing_library_jest_dom: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const PB_SMTP_PORT: string;
	export const NODE_VERSION: string;
	export const npm_package_devDependencies__testing_library_svelte: string;
	export const npm_config_bin_links: string;
	export const HOSTNAME: string;
	export const YARN_VERSION: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_config_init_version: string;
	export const npm_package_scripts_squash: string;
	export const HOME: string;
	export const npm_package_devDependencies__eslint_js: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_config_init_license: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_scripts_check: string;
	export const npm_package_scripts_migrate: string;
	export const npm_config_engine_strict: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies__tailwindcss_forms: string;
	export const PB_SMTP_USERNAME: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_scripts_dev: string;
	export const PB_DATA_DIR: string;
	export const npm_package_type: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_private: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_prepare: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__tailwindcss_vite: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_version: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const PATH: string;
	export const NODE: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const npm_package_name: string;
	export const npm_package_dependencies_pocketbase: string;
	export const npm_package_scripts_pb: string;
	export const npm_package_scripts_test_e2e: string;
	export const MINIO_ROOT_PASSWORD: string;
	export const npm_package_scripts_test_unit: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_scripts_test: string;
	export const npm_config_version_git_message: string;
	export const MINIO_ROOT_USER: string;
	export const npm_lifecycle_event: string;
	export const npm_package_devDependencies_jsdom: string;
	export const npm_package_version: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const SVELTEKIT_PORT: string;
	export const PB_MIGRATIONS_DIR: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const npm_package_devDependencies_globals: string;
	export const npm_config_strict_ssl: string;
	export const PB_SMTP_PASSWORD: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const PB_SMTP_HOST: string;
	export const npm_package_devDependencies__iconify_svelte: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_scripts_preview: string;
	export const NODE_ENV: string;
	export const npm_package_dependencies_daisyui: string;
	export const INIT_CWD: string;
	export const PB_SMTP_TLS: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_ENVIRONMENT: string;
	export const PUBLIC_POCKETBASE_URL: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		PRIVATE_POCKETBASE_SERVICE_USERNAME: string;
		PRIVATE_POCKETBASE_SERVICE_PASSWORD: string;
		npm_package_dependencies_zod: string;
		npm_package_devDependencies__eslint_compat: string;
		npm_package_devDependencies_vitest: string;
		npm_package_devDependencies__testing_library_jest_dom: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		PB_SMTP_PORT: string;
		NODE_VERSION: string;
		npm_package_devDependencies__testing_library_svelte: string;
		npm_config_bin_links: string;
		HOSTNAME: string;
		YARN_VERSION: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_config_init_version: string;
		npm_package_scripts_squash: string;
		HOME: string;
		npm_package_devDependencies__eslint_js: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_config_init_license: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		npm_config_version_tag_prefix: string;
		npm_package_scripts_check: string;
		npm_package_scripts_migrate: string;
		npm_config_engine_strict: string;
		npm_package_description: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies__tailwindcss_forms: string;
		PB_SMTP_USERNAME: string;
		npm_package_readmeFilename: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_scripts_dev: string;
		PB_DATA_DIR: string;
		npm_package_type: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		npm_package_scripts_check_watch: string;
		npm_package_private: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_prepare: string;
		npm_config_registry: string;
		npm_package_devDependencies__tailwindcss_vite: string;
		npm_config_ignore_scripts: string;
		npm_config_version: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		PATH: string;
		NODE: string;
		npm_package_devDependencies_typescript_eslint: string;
		npm_package_name: string;
		npm_package_dependencies_pocketbase: string;
		npm_package_scripts_pb: string;
		npm_package_scripts_test_e2e: string;
		MINIO_ROOT_PASSWORD: string;
		npm_package_scripts_test_unit: string;
		npm_package_devDependencies_eslint: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_scripts_test: string;
		npm_config_version_git_message: string;
		MINIO_ROOT_USER: string;
		npm_lifecycle_event: string;
		npm_package_devDependencies_jsdom: string;
		npm_package_version: string;
		npm_config_argv: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		SVELTEKIT_PORT: string;
		PB_MIGRATIONS_DIR: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		npm_package_devDependencies_globals: string;
		npm_config_strict_ssl: string;
		PB_SMTP_PASSWORD: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		PB_SMTP_HOST: string;
		npm_package_devDependencies__iconify_svelte: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_scripts_preview: string;
		NODE_ENV: string;
		npm_package_dependencies_daisyui: string;
		INIT_CWD: string;
		PB_SMTP_TLS: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_ENVIRONMENT: string;
		PUBLIC_POCKETBASE_URL: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
