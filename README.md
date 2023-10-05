# Mentor ME

## Table of Contents ✨

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Merging](#merging)
- [API](#api)

# Description

No.1 Mentoring app, All the help you need in one place

# Installation

First, run:

```bash
npm install
```

Then run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Usage

## FONTS

- Hanken Grotesk ---> usage "font-hanken"
- Gladiora ---> usage "font-gladiora"
- Inter ---> usage "font-Inter"

## Dev Server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Contributing

MentoMe is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/kleenpulse/landing_help_me_out`.

2. Open your terminal & set the origin branch: `git remote add origin https://github.com/kleenpulse/landing_help_me_out.git`

3. Pull origin `git pull origin dev`

4. Create a new branch for the task you were assigned to, eg `TicketNumber/(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b MME-001/Feat/Dashboard`

5. After making changes, do `git add .`

6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.

7. IMPORTANT: To make sure there are no conflicts, run `git pull origin dev`.

8. Push changes to your new branch, run `git push -u origin MME-001/Feat/Dashboard`.

9. Create a pull request to the `dev` branch not `main`.

10. Ensure to describe your pull request.

11. > If you've added code that should be tested, add some test examples.

# Merging

Under no circumstances should you merge a pull requests on a specific branch to the `dev` or `main` branch

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the , frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

# API

A separate folder called `api` is created withing the app folder here, to make an **API** Call:

- create a new folder within the `app/api` dir
- within the created folder create a `route.ts` file
- within the `route.ts` file you make either a **GET** or **POST** Request

> ❗❗Do not create any custom http calls inside a components. Whatever calls that need to be processed by the server should be called within the `route.ts` file.
