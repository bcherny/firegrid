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
