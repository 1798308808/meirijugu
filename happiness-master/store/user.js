const state = {
	// 用户会员信息
	user_msg:null,
	// 用户基本信息
	user_detail:null,
	// 用户会员组信息
	list:null
}

const mutations = {
	setUserInformation(state,data){
		for(let i in data){
			state[i] = data[i];
		}
		console.log('设置完毕',state)
	},
	changeUserInfo(state,data){
		Object.assign(state[data.name],data.val)
		console.log('设置完毕',state)
	},
	clearUserInfo(state,data){
		if(data.val){
			data.args.forEach((item,index)=>{
				state[item] = data.val[index]
			})
		}
		else{
			for(let item of data.args){
				state[item] = {}
			}
		}
		console.log('清理完毕',state)
	}
}

const actions = {

}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}
