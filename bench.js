var container = document.querySelector('#grid')
var grid = new Firegrid(container)

function render (rows, columns) {

  Array
    .apply(null, { length: columns })
    .forEach(function(){

      var row = Array
        .apply(null, { length: rows })
        .map(function (_, n) { return n })

      grid.appendRow(row)

    })

}

var rows = 10
var columns = 10
var runs = {}

while (columns < 100000) {

  new Benchmark({
    setup: function() {
      container.innerHTML = ''
    },
    fn: function(){
      render(rows, columns)
    }
  })
  .on('complete', function() {
    runs[rows*columns] = this.stats.mean
  })
  .run({ async: false })

  columns = columns*10

}

document.body.innerHTML = ''

Object
  .keys(runs)
  .forEach(function (count) {
    document.body.innerHTML += count + ': ' + runs[count]*1000 + 'ms <br>'
  })