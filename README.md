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
    instagramAccounts
    telegramAccounts
    tiktokAccounts
    twitterAccounts
    name
    nicknames
    phones {
      description,
      number
    }
    surname
    urls
  }
}
```
