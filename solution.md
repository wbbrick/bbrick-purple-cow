# Purple Cow Magic Button Project
Author: Bryan Brick

## Description
This is an example project created to demonstrate basic React-based frontend coding. It features a single button which, when clicked or tapped, makes a call to https://countapi.xyz to increment a counter. Below this is a small counter widget that displays the number of times the button has been clicked.

## Getting started
To run this project on a local machine, you must have Yarn v1+ and Node v14+ installed. 
### Running the project locally
The project can be run from the command line with `yarn start`. This will start a server at https://localhost:3000 by default. To customize, use the PORT environment variable (e.g. `PORT=8000 yarn start`).
### Building the project
The project can be built from the command line with `yarn build`. This will bundle the necessary files into the `dist` folder under the project root.

## Technologies Used
Below is a list of third-party libraries and modules Purple Cow Magic Button project uses. This list is non-exhaustive but covers most of the major technologies used. For a full list, please see the package.json file.
### In-browser
- React
- Counter API's library
### Build tools
- Node/Yarn
- Webpack
- Babel

## Design/Architecture Principles
As this is a simple proof of concept, it is designed with minimal configuration and maximal future-proofing. The webpack, babel, and npm config files are deliberately small and simple; as more tools and customizations become necessary, they can be appended to the files with little trouble. Likewise, the code is minimal but structured in such a way as to provide a convention moving forward. This convention will necessarily need to be augmented as we add more functionality (e.g. Redux, utilities, a data access layer) but this can be determined by the team as situations arise.

The codebase itself, while small, is deliberately structured with reusability and functional composition in mind. For example, functionality such as inserting a loading state during network calls is abstracted out to a function within the component that manages that state so that the network call utilities do not need any information about the context in which they are called. As another example, css modules allow each component to have local classes and css composition is used as an alternative to complicated inheritance chains.

The code and configuration currently follow the YAGNY (you ain't gonna need it) principle. Aside from a few core libraries and basic build tools, the project has virtually no dependencies. If in the future more complex needs arise like flux architecture libraries, advanced theming solutions, or advanced build processes, they can easily be added.

## Potential Updates
Depending on the needs of the client and the direction of the project, some or all of the following additions and modifications may be advisable.
### Strongly Recommended
- **Linting**:
ESLint and other tools like it are a great way to enforce code consistency and document the team's coding standards/style.
- **Dynamic Bundle Naming**:
For any production version of the app, appending hashes to the bundle name would be imperative for cache busting.
- **Testing**:
As the project grows in scope, unit tests would be very useful for both rigorous QA and saving developers time on debugging.

### Recommended (partially dependent on project scope and team opinions)
- **Typescript**:
If the team agrees to it, typescript has great potential to prevent bugs by enforcing rigid type-checking.
- **Global State/Flux Architecture Solution**:
As the project grows, keeping track of state using only React's `useState` hook will become cumbersome and bug-prone. Depending on the size and implementation details, either using React's built-in Context feature or Redux (or a similar third-party library) would alleviate this.
- **A CSS Preprocessor**:
Some form of CSS preprocessor such as SASS or LESS may make the styling of the project easier to read and maintain. This will depend largely on the team's preferences.

### Useful For Scaling But Currently Unnecessary
- **Tree Shaking**:
If the project needs very specific functionality from "toolbelt" libraries like d3, lodash, or moment.js, tree-shaking is an excellent way to pare down the bundle size.
- **Bundle Analysis/Audits**:
The webpack ecosystem has a number of tools to analyze, visualize, and audit the output of the build process. This can be useful for debugging performance issues, comparing environments, and reducing bundle size.
- **Bundle Splitting**:
As the project grows, the bundle may swell to an unwieldy size. In this case, bundle splitting could have a positive impact on performance, particularly if the project includes very heavy front-end libraries like moment.js, esri maps, or bootstrap.

