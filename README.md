# Sreetam Das' solution to the Remote frontend code challenge

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), with the following stack:

-   React + Next.js
-   TypeScript
-   Styled components
-   Jest + React Testing Library

and that's it! as requested, there's no prebuilt CSS/libraries being used.

#### todo:

-   [ ] use localforage for "saving" data
-   [ ] add icon to Add employee button
-   [ ] add down-arrow icon to select field in form
-   [ ] use cypress for end-to-end tests
-   [ ] setup and use GitHub Actions

## Setup

```sh
# once in the root directory, run the following command to setup everything:
yarn

# to run the project locally:
yarn dev
```

and you're good to go! Head on over to [localhost:3000](http://localhost:3000) on your browser to view the project.

### Additional commands

Here's some commands which you'll need to evaluate the project:

```sh
# to build and use a production-ready, minified build:
yarn build
yarn start

# to run the test suite
yarn test

# to see that the project is type-safe
yarn tsc

# and if you'd like to poke around, make changes and want typescript to look out for you
yarn compile
```

### Technical decisions

-   **Next.js**: the challenge description mentioned that I could use whatever tools I wanted, and Next.js was mentioned as an experience bonus in the job post.
    Next.js also allows you to focus on the actual code, and not have to add the boilerplate for things like (but not limited to): [Webpack](https://webpack.js.org), [Babel](https://babeljs.io), server-side rendering, etc.

-   **State management**: `Redux` would be _way_ overkill, and `useState` would lead to passing around props.

    `React.Context` fits this use case perfectly!

-   **CSS**: `styled-components` have been used _almost_ everywhere, with inline styles sprinkled in where a styled component wasn't really justified

-   **Form state**: using a library like [formik](https://github.com/formium/formik) or [react-hook-form](https://github.com/react-hook-form/react-hook-form) was tempting but I wanted to code from scratch as much as possible

-   **TypeScript**: using TS allows the codebase to be scalable much more easily, especially when one is working in collaboration with other contributors. Plus, it's always nice to have it catch errors that might otherwise be easily overlooked

-   **crypto**: using cryptographically secure `id`s is a nice way to highlight the problems with `Math.random()`, and I didn't want to resort to installing a package solely for creating a 10 digit random number. Plus, it gave me a reason to add a `setupTests.ts` file for `jest`
