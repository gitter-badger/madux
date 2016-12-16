
// @flow

import { Store } from './Store';
import { State } from './State';
import { Machine } from './Machine';
import type { Middleware, PropDefinition } from './Types';

exports.createStore = (machine: Machine, middlewares: Array<Middleware> = []) =>
  new Store(machine, middlewares);

exports.createMachine = (states: Array<State>) => new Machine(states);
exports.createState = (name: string, props: Array<PropDefinition> = []) => new State(name, props);

exports.Machine = Machine;
exports.State = State;
exports.Store = Store;
