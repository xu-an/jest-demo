class Helper {
    static trim(s) {
        return s.replace(/^\s+|\s+$/gm, '');
    }

    static isUrl(s) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(s);
    }

    static isEmpty(value) {
        value = value.replace(/^\s+|\s+$/gm,'');
        return (value.length) == 0 ? true : false;
    }
}

module.exports = Helper;