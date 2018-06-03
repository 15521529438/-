const Mocha = require('mocha');
const mocha = new Mocha({
	  reporter: 'mochawesome',
	  reporterOptions: {
	    reportDir: './docs/mochawesome-reporter'//把这个输出文件放在那里
	  }
});

mocha.addFile('./service/router.spec.js');
mocha.run(function () {
	console.log('done');
	process.exit();
});