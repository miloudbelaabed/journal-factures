const font =
const callAddFont = function () {
  this.addFileToVFS("Calibri Bold-normal.ttf", font)
  this.addFont("Calibri Bold-normal.ttf", "Calibri Bold", "normal")
}

export { callAddFont }