import MatchApi from '../DAO/MatchApi';
import asyncActionCreator from '../../Base/ActionCreator/asyncActionCreator';

export default asyncActionCreator({
	name:   'USER_MATCH_GET',
	action: (options) => MatchApi.getUserMatches(options)
});
