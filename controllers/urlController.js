const urlFactory = require("../entities/url-factory");
module.exports = {
  longUrlConvert: async (req, res) => {
    const { url, shortId } = req.body;

    const Url = new urlFactory(url, "long", shortId);
    const response = await Url.islemYap();
    res.status(200).send({
      Status: "Basarili",
      Url: response.longUrl,
      ShortenUrl:
        `http://localhost:${process.env.APP_PORT}` + "/" + response.shortUrl,
    });
  },
  shortUrlConvert: async (req, res) => {
    const { hex } = req.params;

    const Url = new urlFactory(hex, "short");
    const response = await Url.islemYap();

    if (response.longUrl.includes("http")) {
      res.status(301).redirect(response.longUrl);
    } else {
      res.status(301).redirect("http://" + response.longUrl);
    }
  },
};
