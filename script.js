const getSumBtn = document.getElementById("calculateBtn");

getSumBtn.addEventListener("click", () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(cell => {
    total += parseFloat(cell.textContent);
  });

  // Remove old total row if exists
  const oldAns = document.getElementById("ans");
  if (oldAns) oldAns.remove();

  // Create a new row for total
  const table = document.querySelector("table tbody");
  const totalRow = document.createElement("tr");
  totalRow.id = "ans"; // Important for test

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", 2);
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
});
