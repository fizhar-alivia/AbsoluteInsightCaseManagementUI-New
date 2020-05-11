/**
 * @Author Adnan
 * @since 22-Apr-20
 * @Description This file contains server/port address and all api urls
 * 
 **/

var server = 'http://localhost';
var AI_WEB_PORT = ':8080';
var AI_CM_PORT = ':8088';


var oAuthGetTokenURL = server + AI_WEB_PORT + '/ai-web/oauth/token?grant_type=password';
var oAuthRefreshTokenURL = server + AI_WEB_PORT + '/ai-web/oauth/token?grant_type=refresh_token';

var principalDataURL = server + AI_CM_PORT + '/case/principal';
var userSecurityInfoURL = server + AI_CM_PORT + '/case/getusersecurityinfo';
var getCaseViewListURL = server + AI_CM_PORT + '/case/getcaseviewlist?';