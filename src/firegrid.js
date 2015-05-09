export default class Firegrid {

  constructor (container: element) {

    this.container = container
    this.rows = []

    this.cellHeight = 30
    this.cellWidth = 100

  }

  makeCell (
    rowId: number,
    columnId: number,
    content: string
  ): element {

    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('data-column', columnId)
    cell.setAttribute('data-row', rowId)
    cell.style.left = `${ columnId*this.cellWidth }px`
    cell.style.top = `${ rowId*this.cellHeight }px`
    cell.style.height = `${ this.cellHeight }px`
    cell.style.width = `${ this.cellWidth }px`
    cell.innerHTML = content

    return cell

  }

  verifyRowCount (row: array) {

    if (this.rows.length && row.length != this.rows[0].length) {
      throw new RangeError(`firegrid expects all rows to have the same number of cells. Existing rows all have ${ this.rows[0].length } cells, but you attempted to append a row with ${ row.length } cells.`)
    }

  }

  appendRow (row: array) {

    this.verifyRowCount(row)
    this.rows.push(row)

    const rowId = this.rows.length

    row
      .map((_, n) => this.makeCell(rowId, n, _))
      .forEach(this.container.appendChild.bind(this.container))

    this.container.style.height = `${ this.rows.length*this.cellHeight }px`
    this.container.style.width = `${ this.rows[0].length*this.cellWidth }px`

  }

}