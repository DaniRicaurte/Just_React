import { convertCase } from "./Listing 2-5_caseConverter.js";
export function swapCase() {
  const name = document.getElementById("inputName").value;
  let characters = name.split("");
  let changedCharacters = convertCase(characters);
  let changedName = changedCharacters.join("");
  document.getElementById("outputName").textContent = changedName;
}
