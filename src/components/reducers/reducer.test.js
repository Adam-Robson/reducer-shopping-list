import { reducer, initialState } from './shopping-list-item-reducer';
import {
  loadStartAction
} from '../actions/list-actions';
import { newItemTextChange } from '../../actions/list-actions';

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
        newItemText: 'iluvu'
      };
      const newState = reducer(oldState, newItemTextChange('stillluvnu'));
      expect(newState.newItemText).toEqual('stillluvnu');
    });

  });
});
