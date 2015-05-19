'use strict';

/**
 * @ngdoc service
 * @name carShowcaseApp.services.compareListService
 *
 * @description
 * Manage the compare list items
 *
 */
angular.module('carShowcaseApp.services.compareListService', [])

.constant('COMPARE_LIST_CONFIG', {
  'MAX_COMPARE_ITEMS': 3
})

.factory('compareListService', function(COMPARE_LIST_CONFIG) {
  var compareList = [];

  function toggleToList(car) {
    var carIndex = compareList.indexOf(car);
    if (carIndex === -1) {
      compareList.push(car);
    } else {
      compareList.splice(carIndex, 1);
    }
  }

  function isInList(car) {
    return compareList.indexOf(car) !== -1;
  }

  function isListFull() {
    return compareList.length === COMPARE_LIST_CONFIG.MAX_COMPARE_ITEMS;
  }
  return {
    /**
     * Returns an array of cars objects, each with the following structure:
     * @type {Array}
     */
    compareList: compareList,

    /**
     * Checks if the item is in the compare list
     * @param  {Object}  item  car
     * @return {Boolean}      true if is in the list, false if isn't
     */
    isInList: isInList,

    /**
     * Checks if the amount of item on the compare list reach the max
     * of the availables for comparison
     * @return {Boolean}      true if is full false otherwise
     */
    isListFull: isListFull,
    /**
     * Add a car to the compare list when is not present in such list
     * and removes the element if is already in the list
     * @param {Object}
     */
    toggleToList: toggleToList
  };
});
