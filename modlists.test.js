const modlists = require('./modlists.json');
const _ = require('underscore');
const axios = require('axios').default;

test('parse JSON', () => {
    const data = JSON.stringify(modlists);
    const s = JSON.parse(data);
    expect(data).not.toBeNull();
    expect(data).not.toBeUndefined();
    expect(s).not.toBeNull();
    expect(s).not.toBeUndefined();
    expect(data).toEqual(JSON.stringify(s));
});

const checkLink = link => {
    axios.get(link).then(res => res.status).catch(err => err);
}

describe(`checking links for ${modlists.length} Modlists`, () => {
    _.map(modlists, modlist => {
        _.map(modlist.links, link => {
            if(!link.startsWith("https://") && !link.startsWith("http://")) return;
            
            test(`checking link ${link} of ${modlist.title}`, async () => {
                expect.assertions(1);
                return axios.head(link).then(res => {
                    expect(res.status).toBe(200);
                }).catch(err => {
                    const code = err.response.status;
                    expect(code).toBe(405);
                });
            })
        });
    });
});