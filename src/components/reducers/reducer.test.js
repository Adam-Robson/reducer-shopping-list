import { reducer, initialState } from './reducer';
import {
  loadStartAction
} from '../actions/list-actions';
import { textChangeAction } from '../../actions/actions';

describe('list reducer', () => {
  describe('load list', () => {
    it('switches loadingMode to "loading"', () => {
      const newState = reducer(initialState(), loadStartAction());
      expect(newState.loadingMode).toEqual('loading');
    });
  });
  describe('create item', () => {
    it('uses text fed by user', () => {
      const oldState = {
        ...initialState(),
        newText: 'iluvu'
      };
      const newState = reducer(oldState, textChangeAction('stillluvnu'));
      expect(newState.newText).toEqual('stillluvnu');
    });

  });
});
