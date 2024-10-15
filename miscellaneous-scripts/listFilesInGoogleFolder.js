// This Google Apps Script script retrieves and lists the names of all files in a specified Google Drive folder. 
/// It creates a new Google Document and appends the file names as text within the document.

function listFilesInFolder() {
  var folderId = "xxxxxxxxxxxxxxxxxxxxxxx"; // Replace with the actual folder ID
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  
  var fileNames = [];
  
  while (files.hasNext()) {
    var file = files.next();
    fileNames.push(file.getName());
  }
  
  var doc = DocumentApp.create('List_Name'); // Replace with the actual list name, which will appear in your Google Docs
  var body = doc.getBody();
  
  body.appendParagraph(fileNames.join('\n'));
  
  Logger.log('File list created successfully!');
}
