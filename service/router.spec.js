const axios = require('axios');
const { expect } = require('chai');
// const app = require('./app');
// const supertest = require('./supertest');
// function request() {
// 	return supertest(app.listen());
// }
describe("后台接口测试", function () {
	it("test 接口", (done)=>{
		axios.get('http://localhost:3000/test')
		.then(function(res){
			expect(res.status).to.equal(200);//请求状态为200
			if (res.data.data == 'hello world') {
				done();
			}else{
				done(new Error('结果差强人意！'));
			}
		}).catch(function(error){
			done(error);
		});

		// request('http://localhost:3000/test')
		// .expect('Content-Type', /json/)   //返回json文件
		// .expect(200)    //同时状态为200
		// .end(function(res){
		// 	console.log(res);
		// 	if (res.data == 'hello world') {
		// 		done();
		// 	} else {
		// 		done(err);
		// 	}
		// })
	});
});