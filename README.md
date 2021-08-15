A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @daraakitoye/lotide`

**Require it:**

`const _ = require('@daraakitoye/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrOne, arrTwo)`: Takes in two arrays and logs an appropriate message to the console depending on whether or not they are a perfect match.

* `assertEqaul(actual, expected)`: Compares the two values it takes in and  print   out a message telling if they match or not.

* `assertObjectsEqual(actual, expected)`: which will take in two objects and logs an appropriate message to the console depending on whether or not they are a perfect match.

* `countLetters(string)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `countOnly(allItemsArr, itemsToCountObj)`: countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

* `eqArrays(arrOne, arrTwo)`: Takes in two arrays and returns true or false, based on a perfect match.

* `eqObjects(obj1, obj2)`: Will take in two objects and returns true or false, based on a perfect match.

* `findKey(obj, callback)`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

* `findKeyByValue(obj, value)`: Searches for a key on an object where its value matches a given value.

* `flatten(array)`: Takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

* `head(array)`: A function which returns the first item in the array.

* `letterPositions(string)` : Returns all the indices (zero-based positions) in the string where each character is found.

* `map(array, callback)`: Takes an array to map, a callback function, and will return a new array based on the results of the callback function.

* `middle(array)`: Takes in an array and return the middle-most element(s) of the given array.

* `tail(array)`: Returns the "tail" of an array: everything except for the first item of the provided array.

* `takeUntil(array, callback)`: Will keep collecting items from a provided array until the callback provided returns a truthy value.

* `without(sourceArr, unwantedElem)`: Returns a subset of a given array, removing unwanted elements.

