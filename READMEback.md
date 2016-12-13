
# <a href="http://imgur.com/lrRjfK7"><img src="http://i.imgur.com/lrRjfK7.png?1" title="madux" width="250" /></a>

A predictable state container based on [Redux'](https://github.com/reactjs/redux) ideas with build-in state machine.

[Redux](https://github.com/reactjs/redux) is great, but not a solution for every project. When it comes down to creating less complex user interfaces, you probably do not need [Redux](https://github.com/reactjs/redux) at all. When the user interface is not that complex, you might want to think more about it as an advanced predefined state machine. That's where [Madux](https://github.com/Jense5/madux) kicks in.

Although it uses a lot of strategies from [Redux](https://github.com/reactjs/redux), it requires you to think somewhat different about the state of your project. For a simple hands-on tutorial, take a look at the [docs](https://jense5.gitbooks.io/madux/content/).

<img src="https://img.shields.io/badge/status-development-16a085.svg">
<img src="https://img.shields.io/badge/npm-pending-blue.svg">
<img src="https://img.shields.io/badge/build-pending-orange.svg">

### Experience

I have seen a lot of developers forcing themselves to work with libraries like [Redux](https://github.com/reactjs/redux). As the creators wrote themselves, you [might not need it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.kdgzqq3ox). Constantly be thinking about what you are doing is important. Don't use libraries only because other developers are using them.

An example of a small tool I wrote is [fb-term-chat](https://github.com/Jense5/fb-term-chat.git). A small command line tool that uses [Madux](https://github.com/Jense5/madux) to keep a consistent state and makes it easy to maintain.

### Basic example

You can install that latest stable version within your project with npm or yarn. [Madux](https://github.com/Jense5/madux) looks a lot like [Redux](https://github.com/reactjs/redux) in this basic example, but will differ a lot when we [expand this example to a real life command line application](https://github.com/Jense5/fb-term-chat.git). For all the details, check the [documentation](https://jense5.gitbooks.io/madux/content/).

```
$ yarn add madux
```

```js
import { createStore, Machine } from 'madux';

const machine = new Machine('LOBBY', 'ROOM');
machine.from('LOBBY').to('ROOM').on('ENTER');
machine.from('ROOM').to('LOBBY').on('LEAVE');

const store = createStore(machine);

store.subscribe((prev, act, next) => {
  console.log(`Welcome to ${next}`);
});

store.dispatch({ type: 'ENTER' });
store.dispatch({ type: 'LEAVE' });

```

### License

Licensed under MIT