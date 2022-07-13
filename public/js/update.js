const updatePostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#update-title").value.trim();
    const content = document.querySelector("#update-content").value.trim();
    const postId = window.location.pathname.split("/")[2]
    if (title && content) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: "PUT",
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
  .querySelector('.update-form')
  .addEventListener('submit', updatePostHandler);