var content = document.body.innerHTML;
var regx = /(<td.*>王力古汉语字典<\/td>\s*<td>)(<a.*?>)(.*<\/td>)/;
var page = /\d+/.exec(regx.exec(content)[3])[0]
res = chrome.runtime.getURL(`resource/${page}.pdf`)
content = content.replace(regx, `$1<a href=${res}>$3`);
document.body.innerHTML = content;
