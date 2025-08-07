# Contacts

## Queries

Count:

```graphql
{
  countContacts
}
```

You can filter:

- `countContacts(search:"123")`

```graphql
{
  allContacts {
    addresses
    categories
    id
    emails
    socialNetwork {
      discordAccounts {
        alias
        discriminator
        globalName
        legacyUserName
        userName
      }
      facebookAccounts
      githubAccounts
      instagramAccounts
      linkedinAccounts
      telegramAccounts
      tiktokAccounts
      twitterAccounts
      wallapopAccounts {
        url
        note
      }
    }
    name
    nicknames
    note
    phones {
      description,
      number
    }
    surname
    urls
  }
}
```

You can filter:

- `allContacts(search:"123")`

