import { getDB } from '../db/db.js'
import { getContactById, getContactsMatched } from '../json-util.js'

export const resolvers = {
    Query: {
        contacts: async (parent, args) => {
            const { contacts } = await getDB()
            if (typeof args.id !== 'undefined') {
                return getContactById(contacts, args.id)
            }
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
