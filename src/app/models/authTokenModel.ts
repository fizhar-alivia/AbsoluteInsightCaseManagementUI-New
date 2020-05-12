/**
 * @author: Yashfa Iftikhar
 * @since: 05-03-2020
 */
export class AuthTokenModel {
	access_token: string;
	token_type: string;
	refresh_token: string;
	expires_in: number;
	scope: string;
}
