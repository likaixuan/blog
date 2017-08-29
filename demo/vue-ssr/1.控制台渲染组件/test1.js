const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

const main = new Vue({
    data () {
        return {
            msg:"李凯旋"
        }
    },
    template: ` <div>{{msg}}</div>`
})

renderer.renderToString(main, (err, html) => {
    if (err) throw err;
    console.log(html);
})