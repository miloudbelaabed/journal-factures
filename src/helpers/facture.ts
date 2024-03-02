import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"
// eslintimport/extensions:0
import { callAddFont } from "./fonts/Bold-normal.js"
import { callAddFontCalibriNormal } from "./fonts/Calibri Regular-normal.js"
import {
  CalculeMontantHT,
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
  doc.setFont("Calibri Bold", "normal")
  doc.text("Facture N:", 70, 30)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props?.InvoiceID, 110, 30)
  doc.setFontSize(12)
  doc.setFont("Calibri Bold", "normal")
  doc.text("Date de facture:", 130, 40)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props.InvoiceDate, 165, 40)
  doc.setFont("Calibri Bold", "normal")
  doc.text("FOURNISSEUR", 20, 57)
  doc.setFont("Calibri Regular", "normal")
  doc.line(20, 60, 70, 60)
  doc.setFont("Calibri Bold", "normal")
  doc.text("RC:", 20, 65)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props.ClientRC, 35, 65)
  doc.setFont("Calibri Bold", "normal")
  doc.text("Nom:", 20, 70)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props.SupplierName, 35, 70)
  doc.setFont("Calibri Bold", "normal")
  doc.text("Address:", 20, 75)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props.SupplierAddress, 40, 75)
  doc.setFont("Calibri Bold", "normal")
  doc.text("Tel:", 20, 80)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props.SupplierPhone, 35, 80)

  // Client Informat
  doc.setFont("Calibri Bold", "normal")
  doc.text("CLIENT", 120, 62)
  doc.setFont("Calibri Regular", "normal")
  doc.line(120, 65, 160, 65)
  doc.setFont("Calibri Bold", "normal")
  doc.text("RC:", 120, 70)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props.ClientRC, 130, 70)
  doc.setFont("Calibri Bold", "normal")
  doc.text("Nom:", 120, 75)
  doc.setFont("Calibri Regular", "normal")
  doc.setFont("Calibri Bold", "normal")
  doc.text(props.ClientName, 135, 75)
  doc.setFont("Calibri Regular", "normal")
  doc.setFont("Calibri Bold", "normal")
  doc.text("Address:", 120, 80)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props.ClientAddress, 140, 80)
  doc.setFont("Calibri Bold", "normal")
  doc.text("Tel:", 120, 85)
  doc.setFont("Calibri Regular", "normal")
  doc.text(props.ClientPhone, 130, 85)

  const columns = [
    { title: "N°", dataKey: "ItemID" },
    { title: "LIBELLE", dataKey: "ItemLibelle" },
    { title: "QUANTITÉ", dataKey: "ItemQuantity" },
    { title: "PRIX", dataKey: "ItemPrice" },
    { title: "HT", dataKey: "HT" },
    { title: "TTC", dataKey: "TTC" },
  ]
  const body = [
    ...props.InvoiceItems.map((el: any) => {
      return { ...el, HT: CalculeMontantHT(el), TTC: CalculeMontantTTCItem(el) }
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
      [
        "TVA",
        CalculeMontantTTC(props.InvoiceItems) -
          CalculeMontantTotalSansTax(props.InvoiceItems),
      ],
      ["Total TTC", CalculeMontantTTC(props.InvoiceItems)],
    ],

    bodyStyles: {
      cellWidth: 40,
    },
    margin: { left: 115 },
  })
  doc.setFont("Calibri Bold", "normal")

  doc.text("SIGNATURE", 150, 250)
  return doc.save(`Facture N ${props?.InvoiceID}`)
}
