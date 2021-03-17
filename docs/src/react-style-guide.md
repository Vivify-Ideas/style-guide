# React Review Guide

[[toc]]

## React guidelines

* Always use prop-types to define all the props in your components.
* Use displayName to define a particular name for your component.
* Use functional components for components that don’t use state.
* Make sure you don’t edit props within a component (they are read-only).
* Minimize logic in the render method. Logic should be in helper methods, container components or in Redux actions (if used).
* Move all code with side effects (for example Ajax calls) out from the render methods.
* Anything that it is state changing should be done via the setState method.
* For parent-child communication, simply pass props.
* Use ES6 features: spread/rest, destructuring, async/await, default values.


## Redux guidelines

* Reducers must be pure (deterministic).
* Any logic with side effects (non-deterministic) (external services, async code) belongs in an action (via something like redux-thunk and/or redux-saga).
* Containers read a store’s data through selectors.
* Redux should store the minimal possible state, allowing Selectors to compute derived data.
* Use Reselect for selectors that need to be memoized (like derived data). [https://en.wikipedia.org/wiki/Memoization](https://en.wikipedia.org/wiki/Memoization)
* Normalize your data for better reducer composition.
* action name: ```<NOUN>_<VERB>```
* action creator name: ```<verb><Noun>```
* selector name: ```get<Noun>```