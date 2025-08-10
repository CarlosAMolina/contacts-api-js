import { getDB } from '../db/db.js'
import { getContactsMatched } from '../json-util.js'

export const resolvers = {
    Query: {
        contacts: async (parent, args) => {
            const { contacts } = await getDB()
            if (typeof args.filter !== 'undefined') {
                return getContactsMatched(contacts, args.filter)
            }
            return contacts
        },
        countContacts: async (parent, args) => {
            const { contacts } = await getDB()
            if (typeof args.filter === 'undefined') {
                return contacts.length
            }
            return getContactsMatched(contacts, args.filter).length
        }
    }
}
