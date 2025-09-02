export function addImageToGallery(email, imageUrl, gallery) {
    
    let emailSection = [...gallery.querySelectorAll(".email-section")]
    .find(section => section.querySelector("h3").textContent === email);

    if (!emailSection) {

        emailSection = document.createElement("div");
        emailSection.classList.add("email-section");

        const heading = document.createElement("h3");
        heading.classList.add("email-heading");
        heading.textContent = email;
        emailSection.appendChild(heading);

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("email-images");
        emailSection.appendChild(imgContainer);

        gallery.appendChild(emailSection);

    }

    const imgContainer = emailSection.querySelector(".email-images");
    const newImg = document.createElement("img");
    newImg.src = imageUrl;
    newImg.alt = `Randomly assigned image for ${email}`;
    imgContainer.appendChild(newImg);

}