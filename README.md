# Dev Log
initial setup considerations:
- Redux: seems overkill as state management should be easily manageable in this small-scale project.
- API communication: could use vanilla fetch requests, but I decided to use Axios as it simplifies API requests so much, and can decoding JSON data, handling asyncs, etc. Installed with `npm install axios`.

update dependencies by deleting the yarn lock file and running yarn install. it should sweep your files for dependencies.

yarn `--legacy-peer-deps` setting enabled because MUI and axios have clashing peer depedency versions.

# Learning Stuff
- useState initializes with the initial value. it returns the state value and the function to mutate the state value. Convention is to call this mutator set(Name), for example `const [state, setState] = useState(initialValue);`.
- just like Golang, it is customary to name your component with the same name as the file name, even if it is not obligatory.
  

should implement themeprovider. check skeleton copy.

# CVWO Assignment Sample React App

This sample React app is provided to help you experiment and practice web development fundamentals.
It shows how certain functionality can be implemented.
However, do note that this is **far from a model example**.
After all, we want to see how you maximise your learning in web development
and good software development practices.

## Getting Started

### Running the app

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) this repo.
2. [Clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) **your** forked repo.
3. Open your terminal and navigate to the directory containing your cloned project.
4. Install dependencies for the project by entering this command:

```bash
yarn install
```

5. Run the app in development mode by entering this command:

```bash
yarn start
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
7. You should see a page like this.
   ![Basic Page](public/images/BasicPage.png)

### Navigating the code

This is the main file structure

```
.
├── node_modules
├── public
├── src
├── README.md
├── tsconfig.json
├── package.json
├── .eslintrc.js
├── .prettierrc.js
└── yarn.lock
```

Main directories/files to note:

-   `src` usually includes all your source code. That is where most of your functional code will be.
-   `README.md` is a form of documentation about the project. It is what you are reading right now.
-   `package.json` contains important metadata, for example, the dependencies and available scripts in the project.
-   `.eslintrc.js` contains the configuration for ESLint. ESLint is a tool to help enforce code consistency.
-   `.prettierrc.js` contains the configuration for Prettier. Prettier is a tool to help format code.

Try changing some source code and see how the app changes.

## Additional Notes

-   This project uses [Typescript](https://www.typescriptlang.org/).
-   The linting and code formatting rules are specified in `.eslintrc.js` and `.prettierrc.js` respectively.
    You may modify the rules.
-   The available scripts are in `package.json`.
    Here are some scripts that you are likely to use more often:
    -   `yarn start`
    -   `yarn lint:fix`
    -   `yarn format:fix`

## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project uses [MUI](https://mui.com/),
[TypewriterJS](https://github.com/tameemsafi/typewriterjs#readme),
[ESLint](https://eslint.org/), [Prettier](https://prettier.io/).


## create-react-app standard readme

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!