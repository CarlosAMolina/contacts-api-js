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
      wallapopAccounts {
        url
        note
      }
    }
    telegramAccounts
    tiktokAccounts
    twitterAccounts
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
