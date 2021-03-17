import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class HelloComponent extends Component {
  @tracked val = 12;

  @action delta(n) {
    this.val += n;
  }
}
