const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\attribution-models-guide.html", "utf8");
console.log("Has takeaway-banner div: " + /<div class="takeaway-banner"/.test(c));
const banner = c.match(/takeaway-banner__title">(.*?)</);
console.log("Banner title: " + (banner ? banner[1] : "none"));
const bannerText = c.match(/takeaway-banner__text">(.*?)<\/p>/s);
console.log("Banner text: " + (bannerText ? bannerText[1].substring(0, 100) : "none"));
// Also check for emoji in callout
const calloutAll = [...c.matchAll(/<div class="callout__label">(.*?)<\/div>/g)];
calloutAll.forEach(m => console.log("Callout label found: " + m[1]));
