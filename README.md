# Module 2 - Activity 5 - Routing and Navigation

> **A new tool: React Router.** It is a separate library you install; the ideas
> are small once it is set up. You are **done when `npm test` is all green**.

Real apps have more than one page. You will use **React Router v6** to show
different components based on the URL, with navigation links, a **dynamic route**
that reads a parameter, and a **404** catch-all, all without the page ever
reloading.

## Read first

The concepts for this activity live in your **course workspace repo**:

- `content/m2-react/README.md` -> **Activity 5** section
- `content/react-theory/11-the-react-ecosystem.md` (routing in the ecosystem)
- `content/react-theory/01-what-is-react.md` (why SPAs do not reload)

## What to do

### 1. Fill in your details

Open [`student.json`](student.json) and fill in every field.

### 2. Build the routes and pages

| File | Builds | Concept |
| --- | --- | --- |
| [`App.jsx`](src/App.jsx) | the nav links and `<Routes>` | routes, links, 404 |
| [`pages/Home.jsx`](src/pages/Home.jsx) | the home page | a route component |
| [`pages/About.jsx`](src/pages/About.jsx) | the about page | a route component |
| [`pages/Product.jsx`](src/pages/Product.jsx) | a page that reads `:id` | `useParams()` |
| [`pages/NotFound.jsx`](src/pages/NotFound.jsx) | the 404 page | the `*` route |

Each file states the exact requirement. **Do not add your own `<BrowserRouter>`
in `App.jsx`** - `main.jsx` and the tests already provide a Router.

## Set up your repo

1. **Use this template -> Create a new repository**, owner **`HAU-6APSI`**.
2. Name it `m2a5-<classcode>-yourname`, **Private**.
3. Clone your copy and `npm install` (this also installs `react-router-dom`).

## Running the app and the tests

```bash
npm run dev          # http://localhost:5173 - click the nav links
npm test             # each passing test is a point
npm run test:watch
```

> **Write your code in `src/` only.** The files in `test/` are how your work is
> graded.

## Submit

```bash
git add -A
git commit -m "✨ Activity 5 complete"
git push
```

Then check the **Actions** tab for the green check and the "N / N tests passed"
summary.
