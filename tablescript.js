
var SPREADSHEET_ID = "16b35tRvU5_fTAOR4FsGhSSmxQkjaYZiQBL56p4hEWL0";
var TAB_NAME = "Sheet1";

/* 
These are two variables (containers for data) that you need to replace with your own information.

1. SPREADSHEET_ID: To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  16b35tRvU5_fTAOR4FsGhSSmxQkjaYZiQBL56p4hEWL0
  2. TAB_NAME is just the name of your spreadsheet tab. Write it as it is (it's case-sensitive!). 
    –– The default Google Sheet tab is Sheet1.
    –– This also accepts the tab number, in order
  
*/

/* 
   Link to the example spreadsheet: https://docs.google.com/spreadsheets/d/1ndp1b_EgDONxhSEa9rd6N80Y_oEvI57cNbqO9EMUIGQ/edit#gid=0
*/

$(document).ready(function () {
    $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {
      
      console.log(data); 
      
      // Go over everything in data and run the code below
      data.forEach(function (entry) {
        
        console.log(entry);
        
        // Create a row for each entry
        var row = $('<tr>');
        
        // Append cells to the row for each column
        row.append('<td>' + entry.title + '</td>');
        row.append('<td>' + entry.type + '</td>');
        row.append('<td>' + entry.role + '</td>');
        row.append('<td>' + entry.desc + '</td>');
        row.append('<td>' + entry.Keywords + '</td>');
        row.append('<td><img src="' + entry.Img + '" alt="Image"></td>'); // For images
        row.append('<td><a href="' + entry.Link + '">Link</a></td>'); // For links
  
        // Append the row to the tbody
        row.appendTo('tbody');
    
      });
    });  
  });
// thank you https://github.com/benborgers/opensheet