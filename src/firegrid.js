export default class Firegrid {

  constructor (container: element) {

    this.container = container
    this.columnCount = 0
    this.rowCount = 0

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

  appendRow (row: array) {

    const rowId = this.rowCount++
    this.columnCount = row.length

    row
      .map((_, n) => this.makeCell(rowId, n, _))
      .forEach(this.container.appendChild.bind(this.container))

    this.container.style.height = `${ this.rowCount*this.cellHeight }px`
    this.container.style.width = `${ this.columnCount*this.cellWidth }px`

  }

}