const UPDATE_KEYWORD = 'UPDATE_KEYWORD';

const search = {
	state: {
		keyword: ''
	},
	actions: {
		updateKeyword({commit}, keyword) {
			commit(UPDATE_KEYWORD, keyword);
		}
	},
	mutations: {
		UPDATE_KEYWORD(state, keyword) {
			state.keyword = keyword;
		}
	}
}

export default search