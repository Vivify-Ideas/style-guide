# Vue Review Guide

[[toc]]

## Component prop definitions

Prop definitions should be as detailed as possible. Whenever some prop is not required, you should provide default value for that prop. If you have some instance of the class as a prop, you should set type as that class.

**Wrong:**
```js
export default {
  props: ['item']
};
```

**Right:**
```js
// if prop is required
export default {
  props: {
    item: {
      type: String,
      required: true
    }
  }
};
```
```js
// if prop is not required make sure to define a default value
export default {
  props: {
    item: {
      type: String,
      required: false,
      default: ‘test’
    }
  }
};
```

## v-for

Always use **key** with **v-for**. Without key, rerender of the component will be slower, also index should be avoided as a key. Never use v-if on the same element as v-for.

**Wrong:**
```html
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

**Right:**
```html
<ul>
  <li v-for="item in items"
      :key="item.id”>
    {{ item.text }}
  </li>
</ul>
```

## Slots

When you need to bring back rendering to the parent, you should use slots. When there is more slots, slots must be named. Slots should be used for component composition.

## Hooks

Whenever you need to load something before page is loaded, place that async call into **beforeRouteEnter** hook, and call **next** method after call is done. In **next** method you can access to **vm**, which is **this** of that component.

If you need to place some route checks globally, place them in routers **beforeEach** or **afterEach** hook.

Redirecting user to new page from **beforeRouteEnter** hook should be avoided, place that redirects in guards.

Avoid assigning default data in created hook, if you are getting something through the prop, then assign the value directly in data, but something complicated should be placed in created hook.

If you are doing something with the **addEventListener**, you must remove that listener in **beforeDestroy** hook, also, any cleanup should be done in **beforeDestroy** hook.

## Mixins

Mixins usually should be used for sharing some component logic between multiple components. Whenever you see two components that have a lot of same logic, that logic should be moved to the mixin or some other part of your application, so that those components can share that code.
Mixin doesn’t have template, only script tag. You must import mixin and reference him inside mixins array in component.

```js
// my-mixin.component.vue
export default {
  methods: {
    doSomething() {
     return true;
    }
  },
};
```
```js
// Component
import MyMixin from ‘./my-mixin.component.vue’;

export default {
  mixins: [
    MyMixin
  ],
  created() {
    this.doSomething();
  }
};
```

## Watch

**Deep watch should be avoided for large objects, especially if you have circular objects (Object A reference Object B, which references Object A), in that situation watching that object could make performance issues. Deep watch generally needs to be avoided, but can be used in some situations.**

If you need to watch only one property of some object, do that with quotes, like this:
**‘someObject.somePropety’() { ... }**
With the code above, you would be watching for a change only on that property, don’t watch whole object and then check inside body of the function.

If you need to watch something and also that thing from the watcher to be called on component initialization, you should be using **immediate** watcher.

**Wrong:**
```js
export default {
  watch: {
    someObject() {
      this.fetchSomething();
    }
  },
  created() {
   this.fetchSomething();
  }
};
```

**Right:**
```js
export default {
  watch: {
    someObject: {
      handler: ‘fetchSomething’,
      immediate: true
    }
  }
};
```

## v-html

Avoid using v-html if that data is from the user. If you use v-html and data is from the user, you will be expose yourself to the XSS. You must either escape characters or avoid using v-html.

## Avoid $parent

Using **$parent** should be avoided, because component can’t be reused then. You can reuse it, but you must have the same things on that new component, and whenever you change something on parent you must make that changes also on the child component. When you are using $parent, your component is directly bound to the parent component. **Events and props should be used when you need to communicate with the parent. Props down, events up.**

## Using $refs

**$refs** is almost same as the **$parent**, difference is because with your parent is directly bound to the child component. When you change something on the child, it can affect parent component. This things is hard to trace, and you should avoid using $refs on the components. But, **$refs** is safer to use on HTML elements, because they are not changing that often.

## Code Splitting

### By Page

If we make sure each page is represented by its own single file component e.g. Home.vue, About.vue and Contact.vue, then we can use Webpack’s dynamic import function to split each into a separate build file. Then, when the user visits a different page, Webpack will asynchronously load the requested page’s file. When you define route, you just need to use **() => import(...)** for importing component.

### Conditional Content

Another good candidate for code splitting is anything that is shown conditionally, using v-if. For example a modal window, tabs, drop down menus etc. If you are using v-show, then that component will be rendered all the time, with display: none; property

## Reactivity

If you add some property to already reactive object, you must use **Vue.set** or **Vue.util.defineReactive** and with those functions, property would become reactive, otherwise it wouldn’t work.