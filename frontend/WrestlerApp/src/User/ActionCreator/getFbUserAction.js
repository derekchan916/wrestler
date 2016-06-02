import UserApi from '../DAO/UserApi';
import asyncActionCreator from '../../Base/ActionCreator/asyncActionCreator';

export default asyncActionCreator({
	name:   'FB_USER_GET',
	action: (options) => UserApi.getUserFbInfo(options)
});
