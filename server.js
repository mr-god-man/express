var express = require("express");
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'f1X1oyRdSFdNPCvtWSWsbG3A-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'fQlthzQzCj5bOEkidbckCGx9',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'JNONSQgcz333r6ddR0cAimyd'
});

var app = express();
app.use(AV.express())


app.get("/",function(req,res){
	res.end("123")
})

app.listen(process.env.LEANCLOUD_APP_PORT);