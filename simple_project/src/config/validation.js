const validateFun = function($validationProvider){
    const expression = {
        phone: /^1[\d]{10}$/,
        password: function (value) {
            const str = value + ''
            return str.length > 5;
        },
        required: function (value) {
            return !!value;
        }
    };
    const defaultMsg = {
        phone: {
            success: '',
            error: '必须是11位手机号'
        },
        password: {
            success: '',
            error: '长度至少6位'
        },
        required: {
            success: '',
            error: '不能为空'
        }
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
};

export default validateFun;
