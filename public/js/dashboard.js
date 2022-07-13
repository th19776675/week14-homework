const deletePostHandler = async (postId) => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
    });
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Something went wrong")
    }
}

const deleteBtn = document.querySelectorAll(".delete-btn")

deleteBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        deletePostHandler(btn.dataset.id);
    })
})


