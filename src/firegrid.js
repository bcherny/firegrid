export default class Firegrid {

  constructor (container: element) {

    this.container = container
    this.rowCount = 0

    this.cellHeight = 52
    this.cellWidth = 122

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

    row
      .map((_, n) => this.makeCell(rowId, n, _))
      .forEach(this.container.appendChild.bind(this.container))

  }

}