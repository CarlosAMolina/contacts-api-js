import { getDB } from '../db/db.js'
import { getContactsMatched } from '../json-util.js'

export const resolvers = {
    Query: {
        allContacts: async (parent, args) => {
            const { contacts } = await getDB()
            if (typeof args.search === 'undefined') {
                return contacts
            }
            return getContactsMatched(contacts, args.search)
        },
        countContacts: async (parent, args) => {
            const { contacts } = await getDB()
            if (typeof args.search === 'undefined') {
                return contacts.length
            }
            return getContactsMatched(contacts, args.search).length
        }
    }
}
