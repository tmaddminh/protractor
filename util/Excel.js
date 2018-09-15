var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var workbook2 = new Excel.Workbook();
var filename = 'data/data.xlsx';
var async = require('asyncawait/async');
var await = require('asyncawait/await');


//#######################################################################


//#######################################################################


//#######################################################################
var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.csv.readFile('new.csv')
    .then(function() {
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(5);
        row.getCell(1).value = "test test"; // A5's value set to 5
        row.commit();
        return workbook.csv.writeFile('new.csv');
        // return workbook.xlsx.writeFile('new.xlsx');
    });
//#######################################################################

//#######################################################################

// var excel = require("exceljs");
// var workbook1 = new excel.Workbook();
//
// var sheet1 = workbook1.addWorksheet('Sheet1');
//
// sheet1.getCell("A2").value = "test##########";
// workbook1.xlsx.writeFile("new.xlsx").then(function() {
//
// });
//#######################################################################