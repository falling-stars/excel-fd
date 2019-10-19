const { resolve } = require('path')
const Excel = require('exceljs')

const rowCellCenter = row => {
  row.eachCell({ includeEmpty: true }, cell => {
    cell.alignment = { vertical: 'middle', horizontal: 'center' }
  })
}

module.exports = async () => {
  const workbook = new Excel.Workbook()
  await workbook.xlsx.readFile(resolve(__dirname, './template.xlsx'))
  const sheet = workbook.getWorksheet('总表')
  rowCellCenter(sheet.getRow(1))
  rowCellCenter(sheet.getRow(2))
  // worksheet.getCell('A46').value = 'ppx'
  // worksheet.addRow([3, 'Sam', new Date()])
  await workbook.xlsx.writeFile(resolve(__dirname, '../kono.xlsx'))
}