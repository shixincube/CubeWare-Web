var utils = {
    /**
     *  时间戳匹配
     *  @param { Number } timestamp
     *  @param { String } type
     *  @return { String } time
     * */
    formatTime(timestamp, type) {
        if(timestamp == 0) {
            return '-- : --'
        }
        if (!timestamp) {
            return ''
        }
        let time, year, month, day, hours, minutes, seconds;
        time = new Date(timestamp);
        year = time.getFullYear();
        month = (time.getMonth() + 1) < 10 ? ('0' + (time.getMonth() + 1)) : time.getMonth() + 1;
        day = time.getDate() < 10 ? ('0' + time.getDate()) : time.getDate();
        hours = time.getHours() < 10 ? ('0' + time.getHours()) : time.getHours();
        minutes = time.getMinutes() < 10 ? ('0' + time.getMinutes()) : time.getMinutes();
        seconds = time.getSeconds() < 10 ? ('0' + time.getSeconds()) : time.getSeconds();
        switch (type) {
            case 'YY-MM-DD': {
                return year + '-' + month + '-' + day;
            }
            case 'YY-MM-DD HH-MM-SS': {
                return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
            }
            case 'YY-MM-DD HH-MM': {
                return year + '-' + month + '-' + day +  ' ' + hours + ':' + minutes
            }
            case 'HH-MM-SS': {
                return hours + ':' + minutes + ':' + seconds
            }
            case 'YY.MM.DD': {
                return year + '.' + month + '.' + day;
            }
        }
    },

	 /**
     * 简单智能事件转换
     */
    parseTimeAbbr(timestamp){
        let date = new Date(timestamp);
        let sendTime = (date.getMonth() + 1) + "/" + date.getDate();
        let nowDate = new Date();
        if (nowDate.getFullYear() !== date.getFullYear()) {
            sendTime = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        } else if (nowDate.getFullYear() === date.getFullYear() && nowDate.getMonth() === date.getMonth()) {
            if (nowDate.getDate() === date.getDate()) {
                sendTime = (date.getHours().toString().length > 1 ? date.getHours() : '0' + date.getHours()) + ":" + (date.getMinutes().toString().length > 1 ? date.getMinutes() : "0" + date.getMinutes());
            } else if (nowDate.getDate() - 1 === date.getDate()) {
                sendTime = "昨天";
            }
        }
        return sendTime;
    },
    /**
     *  byte to KB or MB
     *  @param { Number } byte
     *  @return { String } KB OR MB
     * */
    revertByteToMB(byte) {
        let MB, floatKB, floatMB;
        if (!byte) {
            return '';
        }
        floatKB = parseFloat(byte / 1024);
        if (floatKB > 1024) {
            floatMB = parseFloat(floatKB / 1024);
            MB = floatMB.toFixed(2) + 'MB';
        } else {
            MB = floatKB.toFixed(2) + 'KB';
        }
        return MB;
    },

    /**
     *  get byteLen
     *  @param { String } val input value
     *  @returns { Number } value length
     * */
    getByteLen(val) {
        let len = 0;
        for (let i = 0; i < val.length; i++) {
            if (val[i].match(/[^\x00-\xff]/ig) != null) {
                len += 1;
            } else {
                len += 0.5;
            }
        }
        return Math.floor(len);
    },

    /**
     *  get Cookie
     *  @param { String } name
     * */
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if(arr = document.cookie.match(reg))
            return decodeURI(arr[2]);
        else
            return null
    },

    /**
     *  set Cookie
     *  @param { String } name
     *  @param { String } val
     *  @param { String } day
     * */
    setCookie(name, val, day) {
        var days = day * 1 || 30;
        var exp = new Date();
        // cookie不传day默认存储30天
        exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + encodeURI(val) + ";expires=" + exp.toGMTString() + ";path=/";
    },

    /**
     *  del Cookie
     *  @param { String } name
     * */
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 24 * 60 * 60 * 1000);
        document.cookie = name + "=;expires" + exp.toGMTString() + ";path=/"
    },

    /**
     *  clear All cookie
     * */
    clearAllCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
    },

    /**
     *  judge eamil
     *  @param { String } val
     * */
    judgeEmail(val) {
        if (val.match('@')) {
            return true
        } else {
            return false
        }
    },

    /**
     *  string encryption
     *  @param { String } type
     *  @param { String } str
     * */
    stringEncryption(type, str) {
        if (!str) {
            return
        }
        switch (type) {
            case 'phone': {
                return str.substr(0, 3) + '****' + str.substr(str.length - 4, 4);
                break;
            }
            case 'email': {
                var newStr = str.indexOf('@');
                return (str.substr(0, 3) + '****' + str.substr(newStr - 4))
                break;
            }
            case 'name': {
                var isEmail = str.indexOf('@');
                if (isEmail > -1) {
                    return str.substr(0, 3) + '****' + str.substr(isEmail - 4)
                } else {
                    return str.substr(0, 3) + '****' + str.substr(str.length - 4, 4);
                }
            }
        }
    },

    /**
     *  match mobile phone
     *  @param { Number } num
     *  @param { Object (Vue) } _this
     * */
    matchMobilePhone(num, _this) {
        var pattern = /^1[034578]\d{9}$/;
        if (pattern.test(num) && num.length == 11) {
            return true;
        } else {
            return false;
        }
    },

    /**
     *  match special characters
     *  @param { String } str
     *  @param { Object (Vue) } _this
     *  @param { String } message
     * */
    matchSpecialCharacters(str, _this, message) {
        var pattern = new RegExp("[`~!#$^&*%()=|{}':;',\\[\\]<>/?~！#￥……&*（）;—|{}【】‘；：” “'。，、？]");
        if (pattern.test(str)) {
            message ? _this.$message.error(message) : _this.$message.error('请不要输入特殊字符');
            return false;
        } else {
            return true;
        }
    },

    matchSpecialCharactersUserName(str, _this, message) {
        var pattern = new RegExp("^[\u4e00-\u9fa5a-zA-Z0-9]+$");
        if (!pattern.test(str)) {
            message ? _this.$message.error(message) : _this.$message.error('请不要输入特殊字符');
            return false;
        } else {
            return true;
        }
    },

    /**
     *  combine number and letter except special characters
     *  @param { String } str
     *  @param { Object (Vue) } _this
     * */
    combineNumberAndLetter(str, _this) {
        var pattern = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,12}$/;
        if (pattern.test(str)) {
            return true;
        } else {
            _this.$message.error('密码由6~12位数字字母组合构成');
            // var pattern1 = /^[0-9]\d*$/;
            // if(str.length < 6 || str.length > 16) {
            //     _this.$message.error('密码由6~16位数字字母组合构成')
            //     return false;
            // }
            // if (pattern1.test(str)) {
            //     _this.$message.error('密码不能是纯数字')
            // } else {
            //     _this.$message.error('密码不能是纯字母')
            // }
            return false;
        }
    }
}

export default utils
