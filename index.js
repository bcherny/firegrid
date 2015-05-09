var container = document.querySelector('#grid')
var grid = new Firegrid(container)

Array
  .apply(null, { length: 1000 })
  .forEach(function(){

    var row = Array
      .apply(null, { length: 30})
      .map(function (_, n) { return n })

    grid.append(row)

  })