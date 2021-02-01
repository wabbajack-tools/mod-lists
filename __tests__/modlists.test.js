const modlists = require('../modlists.json');
const _ = require('underscore');

describe('test modlists.json', () => {
    it('parses correctly', () => {
        let data;
        let s;
        try{
            data = JSON.stringify(modlists);
            s = JSON.parse(data);
        } catch (e) {
            throw `Error while parsing the JSON file! This indicates that the JSON file is not correct: ${e}`
        }
        expect(data).not.toBeNull();
        expect(data).not.toBeUndefined();
        expect(s).not.toBeNull();
        expect(s).not.toBeUndefined();
        expect(data).toEqual(JSON.stringify(s));
    });

    const regex  = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+\']*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    const testLink = (link) => {
        const success = regex.test(link.toLowerCase());
        if(!success)
            throw `Regex doesn't match for "${link}". This happens when a given link is not a valid URL.`;
        return success;
    }
    it('has no URL errors', () => {
        const urlList = new Array();
        _.forEach(modlists, modlist => {
            expect(testLink(encodeURI(modlist.links.image))).toBeTruthy();
            expect(testLink(encodeURI(modlist.links.download))).toBeTruthy();
            expect(testLink(encodeURI(modlist.links.readme))).toBeTruthy();

            if(modlist.links.readme.startsWith("https://github.com/")) {
                throw `Link to readme for ${modlist.links.machineURL} ${modlist.links.readme} must not start with 'https://github.com/'. This will break the website. Get the link for the raw data by using the raw button in the top right corner on GitHub when viewing the file!`
            }

            expect(modlist.links.machineURL).not.toBeUndefined();
            const foundLink = urlList.find((url) => url === modlist.links.machineURL);
            expect(foundLink).toBeUndefined();
            expect(modlist.links.machineURL.includes(' ')).toBeFalsy();
            urlList.push(modlist.links.machineURL);
        });
    });

    it('games are in lower case', () => {
        _.forEach(modlists, modlist => {
            const { game } = modlist;
            const lowercase = game.toLowerCase();
            expect(game).toEqual(lowercase);
        });
    })
});
