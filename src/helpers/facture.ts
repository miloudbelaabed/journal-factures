import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"
import { callAddFont } from "./fonts/Calibri Bold-normal.js"
import { callAddFontCalibriNormal } from "./fonts/Calibri Regular-normal"
import {
  CalculeMontantTTC,
  CalculeMontantTTCItem,
  CalculeMontantTotalSansTax,
} from "./CalculeTTC"

// Default export is a4 paper, portrait, using millimeters for units
export default function FactureTemplate(props: any) {
  // config
  jsPDF.API.events.push(["addFonts", callAddFont])
  jsPDF.API.events.push(["addFonts", callAddFontCalibriNormal])
  const doc = new jsPDF("p", "mm", "A4")
  doc.setFontSize(24)
  doc.text("Facture N:", 70, 10)
  doc.text(props?.InvoiceID, 110, 10)
  doc.setFontSize(12)
  doc.text("Date de facture:", 130, 20)
  doc.text(props.InvoiceDate, 165, 20)
  doc.text("FOURNISSEUR", 30, 67)
  doc.line(30, 70, 70, 70)
  doc.text("RC:", 30, 75)
  doc.text(props.ClientRC, 45, 75)
  doc.text("Nom:", 30, 80)
  doc.text(props.SupplierName, 45, 80)
  doc.text("Nom:", 30, 80)
  doc.text(props.SupplierName, 45, 80)
  // Client Informat
  doc.text("CLIENT", 120, 72)
  doc.line(120, 75, 160, 75)
  doc.text("Nom Enreprise:", 120, 80)
  doc.text("IT Solutions", 150, 80)
  doc.text("RC:", 120, 85)
  doc.text(props.ClientRC, 140, 85)
  doc.text("Nom:", 120, 90)
  doc.text(props.ClientName, 135, 90)

  doc.text("Address:", 120, 95)
  doc.text(props.ClientAddress, 140, 95)
  doc.text("Phone:", 120, 100)
  doc.text(props.ClientPhone, 140, 100)

  const columns = [
    { title: "N°", dataKey: "ItemID" },
    { title: "LIBELLE", dataKey: "ItemLibelle" },
    { title: "QUANTITÉ", dataKey: "ItemQuantity" },
    { title: "PRIX", dataKey: "ItemPrice" },
    { title: "HT", dataKey: "ItemTax" },
    { title: "TTC", dataKey: "TTC" },
  ]
  const body = [
    ...props.InvoiceItems.map((el) => {
      return { ...el, TTC: CalculeMontantTTCItem(el) }
    }),
  ]
  autoTable(doc, {
    columns,
    body,
    headStyles: { fillColor: "#F9BE93", textColor: "black" },
    startY: 120,
  })

  autoTable(doc, {
    body: [
      ["TOTAL", CalculeMontantTotalSansTax(props.InvoiceItems)],
      ["TVA", CalculeMontantTTC(props.InvoiceItems)],
      ["Total TTC", CalculeMontantTTC(props.InvoiceItems)],
    ],
    bodyStyles: {
      cellWidth: 40,
    },
    margin: { left: 115 },
  })
  // window.open(doc.output("bloburl"))

   return doc.save()
}
