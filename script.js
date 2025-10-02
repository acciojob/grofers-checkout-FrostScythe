const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  // Sum all prices
  priceCells.forEach(cell => {
    total += parseFloat(cell.textContent);
  });

  // Create new row for total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = "Total Price: " + total;

  totalRow.appendChild(totalCell);

  // ✅ To prevent adding multiple total rows on repeated clicks,
  // remove any existing total row first
  const oldTotal = document.getElementById("total-row");
  if (oldTotal) oldTotal.remove();

  totalRow.id = "total-row";
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);