# firegrid (work in progress)

the world's fastest browser-based grid.

## design goals

- 1st class streaming api
- minimize dom nesting
- only operate on cells in immediate viewport, use priority queue to process other cells (based on scrolling, etc.)
- 100% test coverage
- instrument for render time and fps, and profile as a core part of ci
- support modern browsers, use polyfills for old browsers
- standalone: no libraries/frameworks required
- ability to handle millions-billions of rows
- modular, mixin support for:
  - n custom renderers
  - resize columns
  - drag n drop columns
  - n pinned columns
  - n subheaders
  - n groupings

## developing

- **watch** `npm run watch`

## benchmarks

### appending cells to the DOM

**appending each cell to a document fragment:**

- 100: 1.1505506749376653ms 
- 1000: 13.355997014432845ms 
- 10000: 123.5919199953787ms 
- 100000: 1286.989833335004ms 
- 1000000: 13768.997999990825ms 

**appending each cell individually to DOM:**

- 100: 1.4487830894404226ms 
- 1000: 12.005684506984327ms 
- 10000: 116.72923999722116ms 
- 100000: 1206.7411428516996ms 
- 1000000: 11619.858200004091ms 

**appending as a single HTML string:**

- 100: 28.490482456394954ms 
- 1000: 232.17146666914533ms

## install

```sh
brew cask install anybar
npm i
```
```