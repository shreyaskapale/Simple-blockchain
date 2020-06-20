var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var hash = require('sha256');
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});






app.post('/send', function(req, res) {
 certificate = req.body.name;
 addblock(certificate);
 show();
 res.send("certificate uploaded");
});

app.listen(1111, function() {
  console.log('xchain : ip - self : port - 1111');
});

class blockchain {
		

		block(idx,date,certificate,self_hash,prev_hash)
		{
			this.block = {"index":idx,"date":date,"certificate":certificate,"self_hash":self_hash,"prev_hash":prev_hash};
			return this.block;
		}

}
var idx = 1;
var CHAIN = [];


////////-GENINIS-///////
genisis={ index: 0,
    date: '16/12/1999',
    certificate: 'genisis',
    self_hash: 'genisis_s',
    prev_hash: 'genisis_x' } 
	CHAIN.push(genisis);
/////////-END-////////

function dates()
{
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;
return today;
}





function addblock(certificate)
{	

	var block = new blockchain;
	date=dates();
	prev_hash = CHAIN[idx-1].self_hash;
	self_hash = hasher(date,idx,certificate)
	BLOCK = block.block(idx,date,certificate,self_hash,prev_hash);
	CHAIN.push(BLOCK);
	idx++;
	

}

function hasher(date,idx,certificate){

	var data = date + idx + "XER23" + certificate;
	data = hash(data);
	return data;
}

function show()
{
	console.log(CHAIN)
}




