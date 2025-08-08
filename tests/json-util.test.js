import { getContactsMatched } from '../src/json-util.js'

describe('getContactsMatched matches differente values', () => {
    test('integer', () => {
        const contacts = [{"id": 1}]
        expect([{"id": 1}]).toEqual(getContactsMatched(contacts, "1"));
    });
    test('key addresses', () => {
        const contacts = [{"addresses": ["foo"]}]
        expect([{"addresses": ["foo"]}]).toEqual(getContactsMatched(contacts, "foo"));
    });
    test('key categories', () => {
        const contacts = [{"categories": ["foo"]}]
        expect([{"categories": ["foo"]}]).toEqual(getContactsMatched(contacts, "foo"));
    });
    test('key emails', () => {
        const contacts = [{"emails": ["foo"]}]
        expect([{"emails": ["foo"]}]).toEqual(getContactsMatched(contacts, "foo"));
    });
    test('key name', () => {
        const contacts = [{"name": "foo"}]
        expect([{"name": "foo"}]).toEqual(getContactsMatched(contacts, "foo"));
    });
})
