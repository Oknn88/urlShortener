const Url = require("./Url");
const urlTable = require("../../models").url;
const crypto = require("crypto");

class LongUrl extends Url {
  constructor(url, shortId) {
    super(url);
    this.url = url;
    this.shortId = shortId;
  }
  async convertUrl() {
    var control = true;
    console.log(control);
    while (control) {
      var id = crypto.randomBytes(3).toString("hex");
      var isIdExist = await urlTable.findOne({
        where: { shortUrl: this.shortId ? this.shortId : id },
      });
      if (!isIdExist) {
        control = false;
      }
    }

    var response = await urlTable.findOne({ where: { longUrl: this.url } });
    if (!response) {
      response = await urlTable.create({
        longUrl: this.url,
        shortUrl: this.shortId ? this.shortId : id,
      });
    }

    return response;
  }
}

module.exports = LongUrl;
