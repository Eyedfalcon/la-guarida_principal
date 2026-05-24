document.getElementById("year").textContent = new Date().getFullYear();

const branchLinks = {
  principal: "https://la-guarida-frontend-y6zo.vercel.app/",
  kids: "https://la-guarida-kids.vercel.app/"
};

document.querySelectorAll("[data-branch]").forEach((card) => {
  const branch = card.getAttribute("data-branch");
  const url = branchLinks[branch];

  if (!url) return;

  card.setAttribute("href", url);
});
