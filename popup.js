const resolverButton = document.getElementById("resolver_button");

resolverButton.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: {
      tabId: tab.id,
    },
    function: () => {
      document
        .querySelectorAll("[data-qa-selector=resolve_discussion_button]")
        .forEach((resolveButton) => resolveButton.click());
    },
  });
});
