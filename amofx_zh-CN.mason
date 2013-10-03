<mason>
Charset=gb2312
Author=zephyrer
Created=2013/10/03
Updated=
Version=1.00
Comment=将 AMO Firefox 约束到简体中文页面
Description=AMO Firefox always zh-CN
Url=addons\.mozilla\.org\/.+?\/firefox\/
</mason>
<html><head><script>
var m = /org\/([-a-z]+)\/firefox\/(\w+)\/([^\/]+\/?)(.*)/i.exec(window.location.href);
if (m) {
  if (m[1].toLowerCase() != "zh-cn" || "" !== m[4]) {
    window.location.href = "https://addons.mozilla.org/zh-CN/firefox/"+m[2]+"/"+m[3];
  }
}
</script>
