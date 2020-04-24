/**
 * @Author Adnan
 * @since 22-Apr-20
 * @Description This file contains server/port address and all api urls
 * 
 **/

var server = 'localhost';
var AI_WEB_PORT = ':8080';
var AI_CM_PORT = ':8088'


var oAuthGetTokenURL = 'http://' + server + AI_WEB_PORT + '/ai-web/oauth/token?grant_type=password';
var oAuthRefreshTokenURL = 'http://' + server + AI_WEB_PORT + '/ai-web/oauth/token?grant_type=refresh_token';

var principalDataURL = 'http://' + server + AI_CM_PORT + '/case/principal';