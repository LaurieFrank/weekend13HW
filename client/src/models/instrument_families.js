// const PubSub = require('../helpers/pub_sub.js');
import { PubSub } from '../helpers/pub_sub.js';

// const InstrumentFamilies = function (data) {
//   this.data = data;
// };

class InstrumentFamilies{
  constructor(data){
    this.data = data;
  }
 //may need to put this at end

//can remove whole start of function
// InstrumentFamilies.prototype.bindEvents = function () {
//   PubSub.publish('InstrumentFamilies:data-ready', this.data);
//
//   PubSub.subscribe('SelectView:change', (evt) => {
//     const selectedIndex = evt.detail;
//     this.publishFamilyDetail(selectedIndex);
//   });
// };

bindEvents() {
  PubSub.publish('InstrumentFamilies:data-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishFamilyDetail(selectedIndex);
  });
};

publishFamilyDetail(selectedIndex) {
  const selectedFamily = this.data[selectedIndex];
  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
};
}
export {InstrumentFamilies};
