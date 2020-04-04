const GoogleSpreadsheet = require("google-spreadsheet");
const { promisify } = require("es6-promisify");

const creds = require("./client_secret.json");

async function accessSpreadSheet() {
  const doc = new GoogleSpreadsheet(
    "11tH_WVs1vmYYrm0EbE8Yx6FUqyBjl-nxF2e6Ag7Vtgo"
  );
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
  console.log(sheet.title);
}

accessSpreadSheet();
