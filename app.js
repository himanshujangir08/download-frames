import fs from "fs";

const webUrl =
  "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/seq-desktop/";
let downloaded = 0;
const totalImages = 650;

if (!fs.existsSync("./images")) fs.mkdirSync("./images");
for (let i = 0; i < totalImages; i++) {
  const imageName = (i + 1).toString().padStart(3, "0") + ".jpg";
  const url = `${webUrl}/${imageName}`;
  fetch(url).then(async (res) => {
    const bufferArray = await res.arrayBuffer();
    fs.writeFileSync(`images/${imageName}`, Buffer.from(bufferArray));
    downloaded++;
    console.clear();
    console.log(`Downloaded ${downloaded} / ${totalImages} Images`);
  });
}
