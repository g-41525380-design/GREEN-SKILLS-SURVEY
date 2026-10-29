function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Susunan mengikut tajuk lajur dalam Google Sheet
    var rowData = [
      new Date(), // Timestamp
      data.nama || "",
      data.jantina || "",
      data.umur || "",
      data.pendidikan || "",
      data.pengalaman || "",
      data.subjek || "",
      data.kv || "",
      
      // BAHAGIAN A
      data.A_1_0 || "", data.A_1_1 || "", data.A_1_2 || "", data.A_1_3 || "", data.A_1_4 || "", data.A_1_5 || "", data.A_1_6 || "",
      data.A_2_0 || "", data.A_2_1 || "", data.A_2_2 || "", data.A_2_3 || "", data.A_2_4 || "",
      data.A_terbuka || "",
      
      // BAHAGIAN B
      data.B_1_0 || "", data.B_1_1 || "", data.B_1_2 || "", data.B_1_3 || "", data.B_1_4 || "",
      data.B_2_0 || "", data.B_2_1 || "", data.B_2_2 || "", data.B_2_3 || "", data.B_2_4 || "",
      data.B_3_0 || "", data.B_3_1 || "", data.B_3_2 || "", data.B_3_3 || "", data.B_3_4 || "", data.B_3_5 || "",
      data.B_4_0 || "", data.B_4_1 || "", data.B_4_2 || "", data.B_4_3 || "", data.B_4_4 || "", data.B_4_5 || "", data.B_4_6 || "", data.B_4_7 || "",
      data.B_5_0 || "", data.B_5_1 || "", data.B_5_2 || "", data.B_5_3 || "", data.B_5_4 || "", data.B_5_5 || "",
      data.B_6_0 || "", data.B_6_1 || "", data.B_6_2 || "", data.B_6_3 || "", data.B_6_4 || "", data.B_6_5 || "",
      data.B_7_0 || "", data.B_7_1 || "", data.B_7_2 || "", data.B_7_3 || "", data.B_7_4 || "", data.B_7_5 || "", data.B_7_6 || "",
      data.B_8_0 || "", data.B_8_1 || "", data.B_8_2 || "", data.B_8_3 || "", data.B_8_4 || "", data.B_8_5 || "",
      data.B_terbuka || "",
      
      // BAHAGIAN C
      data.C_1_0 || "", data.C_1_1 || "", data.C_1_2 || "", data.C_1_3 || "", data.C_1_4 || "", data.C_1_5 || "",
      data.C_2_0 || "", data.C_2_1 || "", data.C_2_2 || "", data.C_2_3 || "", data.C_2_4 || "", data.C_2_5 || "",
      data.C_terbuka || ""
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}