// import "babel-polyfill";
/**
 * 存储登录的用户信息
 *
 * @param {string} [state=JSON.parse(Tool.localItem('User'))]
 * @param {Object} action
 * @returns Object
 */
const User = (state = null, action) => {

    switch (action.type) {
        case 'loginSuccess': 
            //Tool.localItem('User', JSON.stringify(action.UserJson));
            return action.UserJson;
        case 'loginOut': 
            // Util.loginOut();
            return null;
        case 'set_user_res':
            return state = {}// JSON.parse(Tool.localItem('User'));
        default:
            return state;
    }
}
/*
*
* */
const SystemConfig =(state={},action)=>{
    switch (action.type){
        case "set_system_config":
            return Object.assign({}, state, {
                [action.tab]: action.result
            });
        default:
            return state;
    }
};

/*
* 公用loading和modal数据
* */
const CommonSystem=(state={},action)=>{
    switch (action.type){
        case "set_common_obj_loading":
            return Object.assign({}, state, {
                [action.tab]: action.result
            });
        default:
            return state;
    }
};

/*
 * 基础接口数据
 * */
const BaseData=(state={},action)=>{
    switch (action.type){
        case "set_base_data":
            return Object.assign({}, state, {
                [action.tab]: action.result
            });
        case "reset_base_data":
            return Object.assign({});
        default:
            return state;
    }
};

export default {
    User,CommonSystem,SystemConfig,BaseData
};
