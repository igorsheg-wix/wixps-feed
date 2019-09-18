# Wix Abstract Feed


### How to use

Clone the repository:

```bash
git clone https://github.com/igorsheg-wix/wixps-feed.git
```

[Get an Abstract access token](https://app.goabstract.com/account/tokens)

Install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download)):

```bash
now
```

## The idea behind it

[Abstract](https://www.abstract.com) is a safe home for your Sketch design and library files, a single source of truth for your design team's work. Abstract provides our team with a central hub for our design work, helping us manage and maintain design components and files.

We integrate [Abstract's SDK](https://sdk.goabstract.com) into a next.js app that loops over the project's master collections that the current user is invited to. 

