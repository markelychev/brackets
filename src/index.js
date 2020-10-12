module.exports = function check(str, bracketsConfig) {
    let res = str;
    if (res.length % 2) return false;
    const confStr = bracketsConfig.map((arr) => arr.join(""));
    const confRegExp = confStr.map(
        (item) =>
            new RegExp(
                item.replace(
                    /[\|,\(,\),\[,\],\{,\}]/g,
                    (match) => "\\" + match
                ),
                "g"
            )
    );
    for (let i = res.length / 2; i; i--) {
        res = delBreckets(res, confRegExp);
    }
    return res.length ? false : true;

    function delBreckets(str, regExpArr) {
        let cleanStr = str;
        regExpArr.forEach((element) => {
            cleanStr = cleanStr.replace(element, "");
        });
        return cleanStr;
    }
};
