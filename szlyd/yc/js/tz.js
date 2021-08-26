var arr = ["503050", "66521"];

var num = Math.floor(Math.random() * arr.length);
function createCopy() {
  var ipt = document.createElement("input");
  ipt.value = arr[num];
  document.body.appendChild(ipt).select();
  console.log(document.execCommand("copy"));
  alert("安装好APP后，添加小妹麻豆约炮账号：" + arr[num]).then(() => {
    toast("麻豆账号复制成功");
    if (isAndroid) {
        // 安卓的跳转链接
      location.href = "https://xzmd.vip/mdapp.apk";
    } else {
        // ios的跳转链接
      location.href = "https://down.ayy8899.com:3222/9iMX.html";
    }
  });
}
