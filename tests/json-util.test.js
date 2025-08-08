import { getContactsMatched } from '../src/json-util.js'

describe('getContactsMatched matches if the value is in different keys', () => {
    test('key id', () => {
        const contacts = [{"id": 1}]
        expect([{"id": 1}]).toEqual(getContactsMatched(contacts, "1"));
    });
    test('key addresses', () => {
        const contacts = [{"addresses": ["foo"]}]
        expect([{"addresses": ["foo"]}]).toEqual(getContactsMatched(contacts, "foo"));
    });
    test('key name', () => {
        const contacts = [{"name": "foo"}]
        expect([{"name": "foo"}]).toEqual(getContactsMatched(contacts, "foo"));
    });
})
