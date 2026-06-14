import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generatePdf = (
  customer,
  transactions
) => {

  const doc =
    new jsPDF();

  doc.setFontSize(20);

  doc.text(
    "Customer Statement",
    14,
    20
  );

  doc.text(
    `Name: ${customer.name}`,
    14,
    35
  );

  doc.text(
    `Phone: ${customer.phone}`,
    14,
    45
  );

  autoTable(doc, {
    startY: 60,

    head: [[
      "Date",
      "Type",
      "Amount",
      "Method"
    ]],

    body:
      transactions.map(
        (t) => [
          new Date(
            t.createdAt
          ).toLocaleDateString(),
          t.type,
          t.amount,
          t.paymentMethod,
        ]
      ),
  });

  doc.save(
    `${customer.name}.pdf`
  );
};