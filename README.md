# contacts-api-js

## Configuration

Read this [file](https://github.com/CarlosAMolina/contacts/blob/main/README.md) for an explanation of Docker, Bash, etc.

### DB file

The file `/tmp/contacts.json` must exist.

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
