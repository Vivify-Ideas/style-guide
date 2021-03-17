# Angular Review Guide

[[toc]]

## JavaScript Style Guide

Angular code, since it’s JavaScript code, should first follow some JavaScript style guide.
Popular ones are:
  * [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
  * [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  * [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js)

More important is that new contributor to the project keep following code writing style that was used so far, than to start following some style guide (unless in case of refactor).

## Angular style guide

For naming convention and file organization follow official Angular style guide:
[https://angular.io/guide/styleguide](https://angular.io/guide/styleguide)

## Angular-specific guidelines

* Minimize Change detection. Beside obvious not using of change detection method multiple times in code, consider change detection automatic triggers Events (click, change, input, submit), XMLHttpRequests, Timers (setTimeout, setInterval)
* Use Ng Zone's runOutsideAngular function. To avoid change detection when working with some of mentioned change detection triggers and UI updates is not needed wrap code in runOutsideAngular function. This is useful when using third-party libraries that use setTimeout and other features that we want to avoid triggering our change detection.
* Handle async change detections. If change detection is triggered in some async function like  promise callback and component is destroyed in meantime, error will be produced.
* Minimize DOM manipulation. Avoid assigning template variables value with new reference since it will repaint element using that data in DOM. To update some object property in big collection, find that particular object and update it. Use trackBy in ngFor lists to avoid updating of all items.
* Template code goes into separate file. Don’t use component even for smaller ones.
* Avoid presentation logic in templates. Writing small If conditions is Ok. For any other logic use functions and properties.
* Functions and properties used in templates need to be public. AOT compiler insist on this.
* Limit the logic in the component to satisfy the template needs and nothing more. If any additional logic is needed, extract it into a service.
* Make sure third-party libraries goes into vendor files after build
* Http requests should go into service
* Each component has it’s own folder. No two components can share the same folder
* Lifecycle methods go on top of component class
* Use service and component inheritance to avoid code duplication when you have two or more components or services that have lots of same methods
* Use public, private and protected access modifiers for all methods and properties (unless you agreed from start to omit writing it for public)
* Unsubscribe from Observables and Subjects and clear all unnecessary intervals and timeouts on ngOnDestroy
* Use constructor to setup Dependency Injection. Move other logic to lifecycle methods.
* Use typescript types
* Implement Lazy loading from start