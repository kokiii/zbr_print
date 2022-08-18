var printer = require('printer');
var util = require('util');
var printers = printer.getPrinters();
var template = 'N\nS4\nD15\nq400\nR\nB20,10,0,1,2,30,173,B,"barcode"\nP0\n';

function printZebra(barcode_text, printer_name){
  printer.printDirect({
    data: template.replace(/barcode/, barcode_text),
    printer: printer_name,
    type: 'RAW',
    success: function(){
      console.log('Printed: ', barcode_text);
    },
    error: function(err){
      console.log(err);
    }
  });
}

// printZebra("123", "ZDesigner TLP 2844");
// printers.forEach(function(iPrinter, i){
//     console.log('Printer: ', iPrinter.name);
// });

// printer.printDirect({data:"N\nprint from Node.JS buffer\nP0\n" // or simple String: "some text"
//   , printer:'ZDesigner TLP 2844' // printer name, if missing then will print to default printer
//   , type: 'RAW' // type: RAW, TEXT, PDF, JPEG, .. depends on platform
//   , success:function(jobID){
//     console.log("sent to printer with ID: "+jobID);
//   }
//   , error:function(err){console.log(err);}
// });

const TLP2844 = { dpi: 203, maxWidth: 110, maxHeight: 300 };

function mmToIn(mm) {
  return Math.round(mm * 0.03937008);
}
const width = 50;
const height = 15;

console.log(mmToIn(width*height) * TLP2844.dpi);
