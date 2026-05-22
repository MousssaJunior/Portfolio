export default function contactAnimation() {
  const inputs = document.querySelectorAll(
    ".form_item input, .form_item textarea"
  )

  inputs.forEach((input) => {
    const label = input.parentElement?.querySelector("label")

    if (!label) return

    const isTextarea = input.tagName.toLowerCase() === "textarea"

    input.addEventListener("focus", () => {
      label.style.top = "-10px"
      label.style.fontSize = "12px"
      label.style.color = "#005245"
    })

    input.addEventListener("blur", () => {
      if (input.value.trim() === "") {
        label.style.top = isTextarea ? "30px" : "50%"
        label.style.fontSize = "16px"
        label.style.color = "#888"
      }
    })
  })
}