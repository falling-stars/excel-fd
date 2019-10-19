const chalk = require('chalk')
const log = console.log
const page = require('./page')
const excel = require('./excel')

void (async () => {
  log(chalk.yellow('启动浏览器'))
  await page()
  log(chalk.yellow('数据收集完毕，开始填充'))
  await excel()
  log(chalk.green('执行完毕'))
})()