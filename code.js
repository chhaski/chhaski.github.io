/* This music thing uses an API called 'Open Sheet' to get Google Sheets as JSON. Unlike the 'Inspiration' page that uses the 'papaparse' library to turn CSV into JSON, this API does it for us. 

Learn more at https://github.com/benborgers/opensheet
*/

/*
  The API's format is https://opensheet.elk.sh/spreadsheet_id/tab_name.
  
  
  To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
  https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  We're using the 'Music' tab, so this is what we write...
*/


var SPREADSHEET_ID_AND_TAB = "16b35tRvU5_fTAOR4FsGhSSmxQkjaYZiQBL56p4hEWL0/Sheet1";

$(document).ready(function () {
  
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    console.log(data);

    data.forEach(function (row, index) {
      
      console.log(row);
      var tableRow = $('<tr>', { type: row.Vibe }).appendTo("#music");
      
      // Adding cells for each column, empty if data is undefined or empty
      addCell(tableRow, row.title, "type");
      addCell(tableRow, row.type, "title");
      addCell(tableRow, row.role, "role");
      addCell(tableRow, row.desc, "desc");
      addCell(tableRow, row.Link ? `<a href="${row.Link}" target="_blank">Listen</a>` : '', "");

    });
    
  });
  
  new Tablesort(document.getElementById('music'));
});

function addCell(row, value, info) {
  var cellContent = (value !== undefined && value !== '') ? value : '';
  var cell = $('<td>', { info: info }).html(cellContent).appendTo(row);
}

