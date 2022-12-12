module.exports= function parseUrl(url) {
    let obj = {}
    let arr = url.split('&')
    arr.forEach((e, i) => {
        let temparr = e.split('=')
        obj[temparr[0]] = temparr[1]
    });
    return obj
  }