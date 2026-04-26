<script>
document.addEventListener("DOMContentLoaded", () => {

    // Select all tab buttons
    const tabButtons = document.querySelectorAll(".diff-tabs button");

    // Map tab index → chart content ID
    const tabMap = [
        "overall-development",
        "tactical-awareness",
        "technical-precision",
        "soccer-iq"
    ];

    // Select all chart content blocks
    const chartBlocks = document.querySelectorAll(".diff-chart-content");

    tabButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {

            // 1. Remove active class from all buttons
            tabButtons.forEach(b => b.classList.remove("active"));

            // 2. Add active class to clicked button
            btn.classList.add("active");

            // 3. Hide all chart blocks
            chartBlocks.forEach(block => {
                block.style.display = "none";
            });

            // 4. Show the correct chart block
            const targetId = tabMap[index];
            const targetBlock = document.getElementById(targetId);
            if (targetBlock) {
                targetBlock.style.display = "block";
            }
        });
    });

});
</script>
