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
    id
    emails
    socialNetwork {
      discordAccounts {
        alias
        discriminator
        global_name
        legacy_user_name
        user_name
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
