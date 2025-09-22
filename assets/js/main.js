document.getElementById("loadAbout").addEventListener("click", () => {
    loadMarkdown("content/about.md");
});
document.getElementById("loadProjects").addEventListener("click", () => {
    loadMarkdown("content/projects.md");
});
document.getElementById("loadContact").addEventListener("click", () => {
    loadMarkdown("content/contact.md");
});

function loadMarkdown(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            document.getElementById("content").innerHTML = marked.parse(text);
        })
        .catch(err => {
            document.getElementById("content").innerHTML = `<p style="color:red;">Error loading ${file}: ${err.message}</p>`;
        });
}