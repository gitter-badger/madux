
// @flow

import { State } from './State';
import { SingleBound } from './Bounds';

class Machine {

  current: ?string;
  initial: ?string;
  states: Map<string, State>;
  structure: Map<string, Map<string, string>>;

  constructor(states: Set<State>) {
    if (states.size < 1) { throw new Error('You need at least one state!'); }
    this.states = new Map();
    this.structure = new Map();
    states.forEach((state) => {
      if (!this.initial) this.initial = state.name;
      this.states.set(state.name, state);
      this.structure.set(state.name, new Map());
    });
  }

  from(name: string): SingleBound { return new SingleBound(this, name); }

  hasState(state: State): boolean { return this.states.has(state.name); }
  hasStateName(name: string): boolean { return this.states.has(name); }

  start() { this.current = this.initial; }
  stop() { this.current = null; }

  isStarted() { return !!this.current; }

  addTransition(start: string, stop: string, transition: string) {
    if (this.structure.has(start) && this.structure.has(stop)) {
      const maps = this.structure.get(start);
      const newMap = new Map();
      newMap.set(transition, stop);
      if (maps) {
        maps.set(transition, stop);
      } else { this.structure.set(start, newMap); }
    } else { throw new Error('Invalid transition for machine!'); }
  }

  process(transition: string) {
    if (!this.current) { throw new Error('This machine is not started!'); }
    const maps = this.structure.get(this.current);
    if (maps) {
      const destination = maps.get(transition);
      if (destination) return destination;
      throw new Error('No destination found!');
    } else { throw new Error('No map found, fatal!'); }
  }

}

exports.Machine = Machine;