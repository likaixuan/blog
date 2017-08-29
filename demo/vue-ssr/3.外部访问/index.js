const Vue = require('vue');
const express = require('express');
const app = express();
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


app.get('/',function(req,res) {
    renderer.renderToString(main,(err,html) =>{
        res.setHeader("Content-Type", "text/html");
        res.send(html);
    })
})

app.listen(3000);
