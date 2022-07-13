const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#create-title").value.trim();
    const content = document.querySelector("#create-content").value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: "POST",
            body: JSON.stringify({title, content}),
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Something went wrong")
        }
    }
}

document
  .querySelector('.create-form')
  .addEventListener('submit', newPostHandler);