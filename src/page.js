const puppeteer = require('puppeteer')
const { resolve } = require('path')
const isMac = /Darwin/.test(require('os').type())

module.exports = async () => {
  const browser = await puppeteer.launch({
    executablePath: resolve(__dirname, isMac ? '../chrome-mac/Chromium.app/Contents/MacOS/Chromium' : '../chrome-win/chrome.exe'),
    headless: false,
    defaultViewport: {
      width: 1500,
      height: 800
    }
  })
  const page = await browser.newPage()
  await page.goto('https://www.baidu.com')
  await browser.close()
}