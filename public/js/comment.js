const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector("#comment").value.trim();
    const post_id = window.location.pathname.split("/")[2]

    if (comment) {
        const response = await fetch(`/api/comments`, {
            method: "POST",
            body: JSON.stringify({content, post_id}),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.querySelector("#comment").value = ""
            location.reload()
        } else {
            alert("Something went wrong")
        }
    }
}

document
  .querySelector('.update-form')
  .addEventListener('submit', newCommentHandler);