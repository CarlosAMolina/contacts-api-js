import { getContactById, getContactsMatched, getStringWithoutAccent } from '../src/json-util.js'

describe('getContactById', () => {
    test('existent id is retrieved', () => {
        const contacts = [{"id": 1}]
        expect([{ "id": 1 }]).toEqual(getContactById(contacts, 1));
    });
    test('non existent id returns empty result', () => {
        const contacts = [{"name": "Jóhn"}]
        expect([]).toEqual(getContactById(contacts, "o"));
    });
})

describe('getContactsMatched', () => {
    test('does not match the key', () => {
        const contacts = [{"name": "foo"}]
        expect([]).toEqual(getContactsMatched(contacts, "name"));
    });
    test('matches accent if searching not accent', () => {
        const contacts = [{"name": "Jóhn"}]
        expect([{ "name": "Jóhn"}]).toEqual(getContactsMatched(contacts, "o"));
    });
    test('returns all object values', () => {
        const contacts = [{"id": 1, "name": "John", "phones": [{"description": "foo", "number": "1234"}]}]
        expect([{"id": 1, "name": "John", "phones": [{"description": "foo", "number": "1234"}]}]).toEqual(getContactsMatched(contacts, "foo"));
    });
    describe('matches differente values', () => {
        test('array of objects', () => {
            const contacts = [{"phones": [{"number": "1234"}]}]
            expect([{"phones": [{"number": "1234"}]}]).toEqual(getContactsMatched(contacts, "23"));
        });
        test('array of strings', () => {
            const contacts = [{"addresses": ["foo"]}]
            expect([{"addresses": ["foo"]}]).toEqual(getContactsMatched(contacts, "foo"));
        });
        test('integer', () => {
            const contacts = [{"id": 1}]
            expect([{"id": 1}]).toEqual(getContactsMatched(contacts, "1"));
        });
        test('object of objects', () => {
            const contacts = [{"socialNetwork":{"discordAccounts":[{"alias": "foo"}]}}]
            expect([{"socialNetwork":{"discordAccounts":[{"alias": "foo"}]}}]).toEqual(getContactsMatched(contacts, "foo"));
        });
        test('string', () => {
            const contacts = [{"name": "foo"}]
            expect([{"name": "foo"}]).toEqual(getContactsMatched(contacts, "foo"));
        });
    });
})

describe('getStringWithoutAccent', () => {
    test('all accents are replaced', () => {
        expect("aeiou").toEqual(getStringWithoutAccent("áéíóú"));
    });
})
