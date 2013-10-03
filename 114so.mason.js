<mason>
Charset=gb2312
Author=zephyrer
Created=2013/10/03
Updated=
Version=1.00
Comment=将 114so 重定向到 google 搜索
Description=114so to google
Url=daohang\.114so\.cn
</mason>
<html><head><script>
var m = /.+&kw=(.+?)&s=.+/.exec(window.location.href);
if (m) {
window.location.href = "https://www.google.com/search?q="+m[1]+"&ie=utf-8&oe=utf-8";
}
</script>