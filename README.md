# contacts-api-js

## Queries

Count:

```graphql
{
  countContacts
}
```

Modify the previous query to filter:

- `countContacts(filter:"123")`

```graphql
{
  contacts {
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

Modify the previous query to filter:

- By search term: `contacts(filter:"123")`
- By id: `contacts(id:1)`

## Docker configuration

It is explained in this [file](https://github.com/CarlosAMolina/contacts/blob/main/README.md).
