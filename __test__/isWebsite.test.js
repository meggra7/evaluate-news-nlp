import { isWebsite } from '../src/client/js/utils.js';

test('Valid site beginning with http://', () => {
    const site = 'http://www.website.com'
    expect(isWebsite(site)).toBeTruthy();
});

test('Valid site beginning with https://', () => {
    const site = 'https://www.website.com'
    expect(isWebsite(site)).toBeTruthy();
});

test('Invalid site not beginning with http:// or https://', () => {
    const site = 'www.website.com'
    expect(isWebsite(site)).toBeFalsy();
});