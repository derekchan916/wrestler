import UserApi from '../DAO/UserApi';
import asyncActionCreator from '../../Base/ActionCreator/asyncActionCreator';

export default asyncActionCreator({
	name:   'FB_USER_GET',
	action: (fbId, token) => UserApi.getUserFbInfo(fbId, token)
});
