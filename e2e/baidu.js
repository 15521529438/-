const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.baidu.com/'); //打开什么网页
    await driver.findElement(By.name('wd')).sendKeys('图片', Key.RETURN); //检测name为wd的搜索框输入‘图片’
    await driver.wait(until.titleIs('图片_百度搜索'), 1000);//检查跳转的页面头部是不是‘图片_百度搜索’
  } finally {
    await driver.quit();
  }
})();