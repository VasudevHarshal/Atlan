function doGet(e){

 
 var spreadSheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1AHaA75rBZGuqOAdt9x2OFGDY7cTjIohk0AGCTu4u9Xo/edit#gid=87975801");

 var sheet = spreadSheet.getSheetByName("sachin");
  
 return getUsers(sheet); 
  
}


function getUsers(sheet){
  var jo = {};
  var dataArray = [];

  var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  
  for(var i = 0; i<rows.length ; i++){
    var dataRow = rows[i];
    var record = {};
    record['battingScore'] = dataRow[0];
   
    
    record['opposition'] = dataRow[5];
    record['ground'] = dataRow[6];
    
    record['date'] = dataRow[7];
    record['matchResult'] = dataRow[8];
    
    dataArray.push(record);
    
  }  
  
  jo.user = dataArray;
  
  var result = JSON.stringify(jo);
  
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  
}  
