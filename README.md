# Contacts

## Queries

```graphql
{
  totalContacts
}
```

```graphql
{
  allContacts {
    addresses
    categories
    discordAccounts {
      alias
      discriminator
      global_name
      legacy_user_name
      user_name
    }
    id
    emails
    facebookAccounts
    githubAccounts
    instagramAccounts
    linkedinAccounts
    socialNetwork {
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
