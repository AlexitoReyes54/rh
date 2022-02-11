var xl = require('excel4node');
const fs = require('fs')
const Employee = require('../db/models/employee')

const createReport  = async () => {    
    let positions = await Employee.findAll()
    var wb = new xl.Workbook();
    let colums = ['Id','Nombre','Cedula','Departementi','Fecha de inicio','Posicion','Ingreso Mensual','Estado']
    let date = new Date()

    var style = wb.createStyle({
        font: {
            color: '#000000',
            size: 12,
            name: 'Calibri'
        },
        numberFormat: '$#,##0.00; ($#,##0.00); -',
        });

    //await deleteExistinfile()
    var ws = wb.addWorksheet('Reporte de prueba');

    ws.cell(1,1).string('Archivo generado ' + date.toString())
    
    for (let i = 0; i < colums.length; i++) {
        ws.cell(2, i+1)
        .string(colums[i])
    }

    positions.forEach((row,j) => {
        console.log(j);
        ws.cell(j + 3,1)
        .number(row.id)
        
        ws.cell(j + 3,2)
        .string(row.name)
        ws.cell(j + 3,3)
        .string(row.document)
        ws.cell(j + 3,4)
        .string(row.departament) 
        ws.cell(j + 3,5)
        .string(date.toString() )

        ws.cell(j + 3,6)
        .string(row.postion)
        ws.cell(j + 3,7)

        .number(row.monthlyIncome)
        ws.cell(j + 3,8)
        .bool(true)
        console.log(row.postion);
    });

    // Create a reusable style
    
    
    wb.write('Excel.xlsx');
}
function deleteExistinfile() {
    fs.unlink('../Excel.xlsx',(err) =>{
        if (!err) {
            console.log('file deleted');
        }else{
            (err)
        }
    })   
}
module.exports = {createReport}