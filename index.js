let myLeads = [];

const inputEl = document.getElementById("input-id");
const saveInputEl = document.getElementById("saveinput-id");
const saveTabEl = document.getElementById("savetab-id");
const deleteEl = document.getElementById("delete-id");
const ulEl = document.getElementById("ul-id");

saveInputEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  render(myLeads);
  inputEl.value = "";
});

deleteEl.addEventListener("dblclick", function () {
  myLeads = [];
  render(myLeads);
  inputEl.value = "";
});
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li class="li-cls">
      <a href="https://${leads[i]}/" class = an-cls target = _black>
          ${leads[i]}
      </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}
