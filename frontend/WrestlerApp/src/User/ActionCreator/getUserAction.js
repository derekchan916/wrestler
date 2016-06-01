import UserApi from '../DAO/UserApi';
import asyncActionCreator from '../../Base/ActionCreator/asyncActionCreator';

export default asyncActionCreator({
	name:   'USER_GET',
	action: (data) => UserApi.getUserData(data)
});
