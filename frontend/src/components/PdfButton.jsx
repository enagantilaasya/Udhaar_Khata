import { generatePdf }
from "../utils/generatePdf";

function PdfButton({
  customer,
  transactions,
}) {

  return (
    <button
      onClick={() =>
        generatePdf(
          customer,
          transactions
        )
      }
      className="
      bg-blue-600
      text-white
      px-4
      py-2
      rounded-lg"
    >
      Download PDF
    </button>
  );
}

export default PdfButton;