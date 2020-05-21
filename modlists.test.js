const modlists = require('./modlists.json');
const _ = require('underscore');

describe('test modlists.json', () => {
    it('parses correctly', () => {
        const data = JSON.stringify(modlists);
        const s = JSON.parse(data);
        expect(data).not.toBeNull();
        expect(data).not.toBeUndefined();
        expect(s).not.toBeNull();
        expect(s).not.toBeUndefined();
        expect(data).toEqual(JSON.stringify(s));
    });

    const regex  = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    const testLink = (link) => {
        const success = regex.test(link);
        if(!success)
            throw `Regex doesn't match for ${link}`;
        return success;
    }
    it('has no URL errors', () => {
        _.forEach(modlists, modlist => {
            expect(testLink(encodeURI(modlist.links.image))).toBeTruthy();
            expect(testLink(encodeURI(modlist.links.download))).toBeTruthy();
            expect(testLink(encodeURI(modlist.links.readme))).toBeTruthy();

            expect(modlist.links.machineURL.includes(' ')).toBeFalsy();
        });
    });
});
