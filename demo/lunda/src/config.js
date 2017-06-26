//开发环境为true、生产为false
let ISDEV = false;

//目标服务器路径
let host = 'http://192.168.1.6:88';

let devUrl = host;

if (ISDEV) {
    devUrl = "/api";
}

module.exports = {
     host,
    devUrl
};