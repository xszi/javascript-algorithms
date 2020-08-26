function letslazyload (dom) {
    let regexp1 = new RegExp(/(\<img )([^>]*)(src=")([^"]*")([^>]*)(\>)/, 'g');
    dom = dom.replace(regexp1, function (match, p1, p2, p3, p4, p5, p6) {
        return p1 + p2 + 'data-src="' + p4 + p5 + p6;
    });
    return dom;
}

const imgUrl = "<img src='https://sponsor-static.segmentfault.com/21f414f9b4cd660c67d8e3051abb8afb.png' />"

console.log(letslazyload(imgUrl))
