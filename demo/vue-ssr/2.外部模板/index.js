const Vue = require('vue');

const fs = require('fs');
const main = new Vue({
    data () {
        return {
            msg:"李凯旋"
        }
    },
    template: ` <div>{{msg}}</div>`
})


const renderer = require('vue-server-renderer').createRenderer(({
    template: fs.readFileSync('./index.html', 'utf-8')
}));
renderer.renderToString(main,(err,html) =>{
    console.log(html);
})
