export default function createElementHtml(id, name) {
  return document.getElementById(`${id}`).insertAdjacentHTML("beforeend", name);
}