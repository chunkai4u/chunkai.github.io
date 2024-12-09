// This script makes a bee slowly move towards the user's cursor.
// We track the cursor position and move the bee with a slight delay.

document.addEventListener('DOMContentLoaded', () => {
    const bee = document.getElementById('bee');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Current position of the bee
    let beeX = mouseX;
    let beeY = mouseY;
    
    // Speed factor for the bee
    // The closer this value is to 1, the faster the bee will move towards the cursor.
    const speed = 0.05; // Adjust this for slower or faster chasing
    
    // Update bee position at each animation frame
    function animate() {
        // Move bee towards mouse position
        beeX += (mouseX - beeX) * speed;
        beeY += (mouseY - beeY) * speed;

        // Apply transform to bee element
        bee.style.transform = `translate(${beeX - (bee.offsetWidth / 2)}px, ${beeY - (bee.offsetHeight / 2)}px)`;
        requestAnimationFrame(animate);
    }

    // Track mouse movements
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Start animation
    animate();
});
