# Adopt Me
(Based on the Frontend Masters course: "Intro to React - v7". I am including what most caught my attention, and certain concepts that I feel are crucial to understand React.)

### Bare bones React
Add the following script tags to the end of the body

```bash
<script sr="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script src="./App.js"> </script>
```
(these two will help us how we can work with React without having to use jsx; just for demo purposes, we'll delete them later.)

App.js will contain two functions: App, Pet
We use React.createElement to create instances of an html element or a component; App is the main function, the parent component; Pet is a child component. App creates instances of the Pet component (the pet component will create a div, with an h1, and two h2 in it), like so:

```bash
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

The parent component creates one or more instances of the child component, and passes property values to them (and not vice versa). 

These values are stored in the props object.

The child component receives the props objects as arguments, so we can use their properties via dot-property-names or de-structuring them.
The data flows from the parent to child components and not vice versa by design. To do the opposite, we can use Redux, Context and other workarounds.
A React.createElement can have a html element or component as first argument, an object (with or without properties) as a second argument, and what is nested inside the first argument (…children).
ReactDOM.render takes two arguments, the first one creates an instance of the App, usually without arguments (React.createElement(App), the second argument shows where you want to render that instance (document.getElementById("root")).

## ON PRETTIER

Customizing Prettier on your project
Include a .prettierrc file in the root folder, and place a {} in the file. If you need to customize the use of quotation marks, arrow, semi-colon, spaces… you can do it here

Formatting the document to be accessed on any system
Install prettier as a dev dependency (which will only be installed during local development, it will not be shipped for production)

```bash
npm install  -D prettier 
```

Add this to the JSON.package file "script" section:

```bash
"format": "prettier —-write \"src/**/*.{js, jsx}\""
```

(npm run format) This is useful when you make open source projects, not all developers use prettier or vscode … if they don’t, they can use these commands and be in the same page.

Configure: (command + ,)
-Format on Save
-Require config prettier (Prettier won’t run unless there’s a .prettierrc file; this is to make sure all developers use prettier)


Command + shift + P —> Settings. Make sure you have these settings:
```bash
  "[javascriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
```

ESLint deals with syntaxes, apis.

This project includes Prettier and Eslint, this is the command to install it.
```bash
npm i -D eslint@8.8.0 eslint-config-prettier@8.3.0
```

This command will install dependencies which can be seen in package.json:
```bash
    "eslint": "^8.8.0",
    "eslint-config-prettier": "^8.3.0",
```
The ^ means: "give me the latest patch" of the code.

Open a file, name it .eslintrc.json and write the following:(remember prettier MUST COME LAST)
```bash
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "rules": {
    "react/propp-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "jsx-a11y", "import"],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}

.gitignore should have these:
node_modules/
.parcel-cache/
dist/
.env
.DS_Store
coverage/
.vscode/
```

PARCEL
It’s a fast solution for bundling packages that need customized compiling. Vive is another option.
Use:
```bash
npm i -D parcel 
```
Then, add to the scripts to package.json:
```bash
    "dev": "parcel src/index.html"
```
Use this command to start development. This command will generate a `dist` directory and a `.parcel-cache` directory

## REACT
Next, run this code:
```bash
npm i react@17.0.2 react-dom@17.0.2 
```
Now you can write in App.js
```bash
import React from 'react';
import { render } from 'react-dom';
```
You could also do:
```bash
import react-do from 'react-dom'; 
```
(first alternative: it jus grabs what it needs, not the whole package like in the second alteranative)

` When adding the script tag to the index.html file, add type= "module" to inform parcel that it needs to use modules.`

  <script type="module" src="./App.js"> </script>

Finally, this command creates the react app:
npx create-react-app test-app

### COMPONENT MODULES
It is recommended to use capital letters with components (but it’s not necessary)

### BROWSERSLIST

package.json should have this:
```bash
  "browserslist": [
    "last 2 Chrome versions"
  ]
 ```
Visit browserslist.dev for more reference

### JSX

JSX spares you from having to use the api React.createElement(), it’s more readable.
```bash
React.createElement("h1", { id: "main-title"}, "My Website")
```
is equivalent to:
```bash
<h1 id="main-title">My website<h1>
```
import React from 'react' is not needed anymore (it is put by React by default)

In the past, developers followed the "division-of-concerns" principle, instead of writing HTML, CSS and JS in one big file, they separated them in 3 different files (following the model-view-controller approach). The problem was they had to do a lot of digging when debugging a problem, lots of going back and forth among the files, looking for the problem.
 
React put everything together into one small component, where one component does one things, and it does it really well, and then we can compose components out of other components. This is React’s methodology: you can put the view, the html, you can put the style… if there’s ever a problem with the component Pet seen in the example above, we know exactly where to catch the problem.


## Configure ESLint with JSX
Run this command so ESlint can now understand JSX:
```bash
npm install -D eslint-plugin-import@2.25.4 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.28.0
```  
a11y is short for accessibility (11 character between a and y)

## SEARCH FORM COMPONENT
A component with its properties are made to be displayed the way they are each time they are rendered. This translates into avoiding side effects, just using pure functions. The component, in this sense, is immutable.
Generally, your top level app component is going to be a collection of page components or very high level components.

Whenever you are building an application it’s good to stop and say: what do I expect to happen before I refresh and head over?

## HOOKS
Their names start with use: useEffect, useState…

useState, when destructured, gives you a mutable state and a function that mutates that state. Whenever this function is called, React knows that states has been modified, so it triggers a render. This is an example of one-way data binding: the data that is updated in the input element is mirrored wherever the variable representing it is located, but not the other way around.

useState depends heavily on the order it is called. So do not use hooks in conditional statements, loops or the like.
You can’t depend on how frequently React is going to rerender; don’t depend on how it is going to batch, don’t depend on what order things are going to run in, don’t have side effects, keep your render functions very clean and fast.

JS in general is really fast. Back to the example, in the input element, the onChange function, every time this rerender function gets called, it is actually creating a new function. Not ideal.But for this example, this is fine. 

Controlled vs Uncontrolled Components
Controlled components manage data via Reacts props and callbacks. Uncontrolled components data is managed by the DOM, instead.

In forms, unless you need to validate sensitive information, you don’t usually need controlled components.

## MAPPING DATA TO COMPONENTS
```bash
npm i -D eslint-plugin-react-hooks@4.3.0  
(This warns developers not to use hooks within if statements - this is the rule of hooks)
```
We use onChange and onBlur together because, sometimes, when the browser navigates away from a select, or through different tools (like screenreader or some other accessibility tools), they will not fire the change event, which means, you will not catch the change sometimes. But it you do onChange and onBlur, you will get both of them.

Implicit return with one-line JS functions
You can use this:
```bash
              {ANIMALS.map((animal) => {
                return (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                );
              })}
```
Or this:
```bash
          {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
```

## EFFECTS

Remember not to do side effects inside React.
useEffect is like a little function that you can wrap around something, to say: here we are going to do things that are going to call APIs, or do other kinds of stateful things that are going to live outside of your component.

They are called outside of the render, and they will be called later. It’s similar to a callback function, which you don’t execute right away, you are waiting for something to happen, like an event listener: that’s useEffect. It says: Finish my rendering function, then call my effect; in this case, it will go fetch some data from an api and then come back.

In the example, inside useEffects, we call a function requestPets(), when called, it will go to an API to get all the pets, and then call updatePets(). Now how often do we need to call updatePets()?
For now we just want to call it at the beginning. Eventually we want it when it submits the form.

You can give the array dependancy variables."Call this effect again whenever (x) happens" (if I write "breed", it will call it whenever breed changes). Since we want to call it exactly once at the beginning, after the first render, we will keep the array empty.
```bash
  useEffect( () => {
    requestPets();
  },[]);
```
If we give it no array, we are saying: Hey! If anything changes!(any variable from any hooks)
```bash
  useEffect( () => {
    requestPets();
  });
```
Whenever you want to disable Eslint, type:
```bash
eslint-disable-line react-hooks/exhaustive-deps (if you know what you are doing)
```
Question: why is requestPets() inside of searchParams? 
It is wasteful because we can create a new function every single time that we render. Not ideal, not a big deal. The reason is that we are using closures (…) we need to reference the variables from the useState hooks (location, animal, breed), and they are inside searchParams.

As soon as the request is made, React triggers the first render, with all the empty states, then, useEffect calls the requestPets() function, which fetches the data and populates the animal menu and the Pets object data fetched from the API.

Effects are scheduled to run immediately after the first render. We can also schedule to run it later.

Thanks to closures, requestPets() can use the variables declared in searchParams():  (animal, location, breed)

## CUSTOMS HOOKS
We now need a list of breeds for each animal (for dogs: Poodle, Labrador, Cocker Spaniel…); we will make a customs hook to handle this.

First, we create a component named useBreedList.js which will export the function useBreedList(animal). We will work with useState and useEffect so we import them. 

We choose useEffect, since we need useBreedList(animal) to be triggered as soon as the value in animal changes, which happens when the user selects an animal value in the drop list.

Also, to avoid hitting the API unnecessarily, we create a localCache array where we can store the breed lists as we fetch them, this way we don’t request for lists we already have.

Then we set up two hooks (breedList and status) with their respective 'setter functions’; the main function, the component, will return these.

Next, we configure useEffect so it will trigger whenever the argument of the main function changes (animal). If animal changes, useEffect will do any of these 3 things:
- If animal is undefined or false, it will set bredList to have an empty array.
- It will check localCache, and if it finds that localCache already has a list of breeds of the animal passed in useBreedList, it will pass this array to setBreeList, so breedList is returned with this array (it will skip the fetching)
- Otherwise, if the animal in question has no breed list available, we fetch it with an async function named requestBreedList, which clears the breedList with an empty array (setBreedList = ([])), fetches the list, formats the object received to json, and stores the breed list (or an empty array is nothing is provided) in localCache. 
- It is crucial to know beforehand the proper routes of the API to be able to fetch exactly what we need in each component (there should be documentation available)

We have used async and await within useEffect to handle data fetching.

useBreedList() can return a breed list and a status now.

Our custom hook is ready to be consumed by SearchParams, so we import it there, and place it along with the other hooks like so:
```bash
const [breeds] = useBreedList(animal);
```
where breeds contains an array of breeds.

## SUBMITTING THE FORM
Within the form tag, use onSubmit={} property to include the following functions:
```basj
e => { 
	e.preventDefault();
	requestPets();
}
```
The main function and the first function within prevent the form to be submitted via the http post method, avoid unnecessary loading/refresh of the page. The second function triggers requestPets(), which will fetch the data based on the entered parameters, parses it and makes it available to updatePets, so pets can be passed in the Results component, which will finally display the list of pets that match the values selected in location, animal and breed.

## BUILDING FOR PRODUCTION
The development environment uses packages and stuff we don’t want our apps to have once they are in the production environment (out there on the internet, with our users). 

For example, if we use parcel, we  can use the command to strip our code out of the development stuff:
```bash
npx parcel build src/index.html
```
This will reduce index.html from 1.4MB to 132KB.

## USING STRICTMODE
It will help you future-proof your application by putting additional checks that will prevent you from adding things that can potentially break your app, like the future React batching mode, or suspense rendering.It will likely be more compatible with the next version of React.
StrictMode has been made a component, so we import it
```bash
import { StrictMode } from 'react';
```
 and use it to wrap our code; they made it a component so it can wrap all the code or just parts of our code, especially when we are working with legacy code, we can wrap only the modern parts.


## DEVTOOLS
You can install React Dev Tools in Firefox, Chrome and use it for debugging.
One useful thing you can have is:
```bash
useDebugValue()
```
place it in a component that has a hook, in the declaration area, outside of the function, you can use it to test / debug your code.

`"Profiler"` dev tool from the extension, can be used to detect where your app gets stuck when rerendering.

## REACT ROUTER
We'll install react-router-dom in our project:
```bash
npm install react-router-dom@6.2.1
```

React Router will manage all our routes, it prevents the app from sending a full request to the server, generating a refresh/reload; it manages the request in the browser instead, adding to performance.So we import { BrowserRouter, Route, Routes} and wrap them around our app component:
```bash
const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>Adopt Me</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};
```

Each Route component will have the path property, specifying the route, and the element property, which indicates the component to be displayed once the router is invoked.

## { Link }  (copied for "https://btholt.github.io/complete-intro-to-react-v7/lessons/react-capabilities/react-router" - had a hard time catching up!)
So now let's make the two pages link to each other. Go to Pet.js.

```bash
import { Link } from "react-router-dom";
```
change wrapping `<a>`
```bash
<Link to={`/details/${id}`} className="pet">
  […]
</Link>;
```
Why did we change this? Didn't the `<a>` work? It did but with a flaw: every link you clicked would end up in the browser navigating to a whole new page which means React would totally reload your entire app all over again. With `<Link>` it can intercept this and just handle that all client-side. Much faster and a better user experience.

Now each result is a link to a details page! And that id is being passed as a prop to Details. Try replacing the return of Details with:
```bash
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
```
The useParams hook is how you get params from React Router. It used to be through the props but now they prefer this API.

Let's make the Adopt Me! header clickable too.
```bash
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```
replace h1
```bash
<header>
  <Link to="/">Adopt Me!</Link>
</header>;
```
Remember to place the `<Route/>` components within `<Routes />` and `<Routes />` within `<BrowserRouter />` or `<HashRouter />` when you want all your routes "be redirected to only one route".

## THE OLD API: WRITING CLASS COMPONENTS
They seem to provide extra functionalities, they are more verbose though.

Syntax:
The declaration considers at least two key words: `class` and `extend`
(You need to import { Component } from 'react' first!)

```bash
import { Component } from 'react';

class MyClass extend Component {

}
```

- Inside, you can find: variables (state), methods, a render function which returns something. Every class component should have a render method that returns some sort of JSX.
- Not every component needs to have a constructor, but if you have one, you need to have include super(props), to make sure props are passed up to React so it keeps track of them.
- componentDidMount is a function that's called after the first rendering is completed. This pretty similar to a useEffect call that only calls the first time. This is typically where you want to do data fetching. It doesn't have to be async; we just made it async here to make the data fetching easy.
- Notice instead of getting props via parameters and state via useState we're getting it from the instance variables this.state and this.props. This is how it works with class components. Neither one will you mutate directly.
- this.state is the mutable state of the component (like useState). You'll use this.setState to mutate it (don't modify it directly.)
- this.props comes from the parent component, similar to parameter given to the render functions that we pull props out of.
```bash
import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;
```
ABOUT WrappedDetails:
React Router's API only exposes hooks. If you have a class component that is a route, this is how you can use it, make a wrapper component that uses the hook you need, and then pass that into the component. You'll find yourself frequently making these little wrapper components for things like this.

## EXPERIMENTAL FEATURES: CLASS PROPERTIES

he constructor is annoying. We can use something called class properties to make it a lot nicer and easier to read. Class properties are a new part of JavaScript so we need Parcel transform the code when Parcel transpiles our code. Luckily our config will do that by itself so no further changes are needed (previously we did need to.)

Parcel will merge this config with what it has already, so we just need to pull in the one Babel plugin we need.
```bash
npm i -D @babel/plugin-proposal-class-properties@7.16.7
```
Now make a file called .babelrc with the following:
```bash
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
Babel's core concept is a plugin. Every one sort of a transformation it can perform is encapsulated into a plugin. Here we're including one explicitly: class properties.

Now with this, we can modify Details to be as so:

// replace constructor
state = { loading: true };

## STATIC DEFAULTPROPS
`static defaultProps` lets us set props whenever props is not provided by the parent component. This saves us from the need to write extra logic that checks if props are available.

## ARROW FUNCTIONS VS FUNCTION DECLARATIONS
Arrow functions don't create new contexts, they just use the context of the parent function. (Functions declarations do create new contexts). This is helpful to understand `this` within the `handleIndexClick` function:

```bash
import { Component } from "react";

class Carousel extends Component {

	state = {
		active: 0
	}

	static defaultProps = {
		images: [	'http://pets-images.dev-apis.com/pets/none.jpg' ]
	}

	handleIndexClick = (event) => {
		this.setState({
			active: Number(event.target.dataset.index)
		})
	}

	render() {
		const { active } = this.state;
		const { images } = this.props;
		return (
			<div className="carousel">
				<img src={images[active]} alt="animal" />
				<div className="carousel-smaller">
					{images.map((photo, index) => (
						<img 
						onMouseEnter={this.handleIndexClick}
						key={photo}
						src={photo} 
						className={ index === active ? 'active' : ''}
						data-index={index}
						alt="animal thumbnail" />
					))}
				</div>
			</div>
		)
	}
}

export default Carousel;
```
