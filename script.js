function toggleAnswer(element) {
  const icon = element.querySelector("i");
  const answer = element.nextElementSibling;

  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    answer.style.height = answer.scrollHeight + "px";
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    answer.style.height = answer.scrollHeight + "px";
    setTimeout(() => {
      answer.style.height = "0px";
    }, 10);
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
    setTimeout(() => {
      answer.classList.add("hidden");
    }, 300);
  }
}
