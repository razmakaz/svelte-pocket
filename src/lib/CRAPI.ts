import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
/**
 * @class CRAPI - Composable RESTful API
 * @description A class that provides a composable RESTful API for use across the application.
 */
class CRAPI {
	static db = new PocketBase(PUBLIC_POCKETBASE_URL);
}

export default CRAPI;
