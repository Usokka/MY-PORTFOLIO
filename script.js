let lightTheme = false
const switchTheme = document.querySelector('.btn-container')
const switchBtn = document.querySelector('.switch')

switchTheme.addEventListener('click',()=>{
    document.body.classList.toggle("light-theme")
    lightTheme=!lightTheme
    switchBtn.style.transform= lightTheme ? `translateX(30px)` : `translateX(0)`
})



const hiddenPresent = document.querySelectorAll(".hidden-present")
const presentationObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.add("show-present",entry.isIntersecting);
    })
}
,
{
    treshold:0.5
}
)
hiddenPresent.forEach(elem =>presentationObserver.observe(elem))

const hiddenSkill = document.querySelectorAll(".hidden-skill");
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-skill");
            skillsObserver.unobserve(entry.target); // Stop observing after revealing
        }
    });
}, {
    threshold: 0.1, // Corrected spelling of 'threshold'
});

// Observing each hidden skill
hiddenSkill.forEach(skill => skillsObserver.observe(skill));



const hiddenProjects = document.querySelectorAll(".hidden-project");
const projectsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-project");
            projectsObserver.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.3, 
});
hiddenProjects.forEach(project => projectsObserver.observe(project));



/* CMD CONTROLS */

const cmd = document.querySelector(".cmd")
const enlarge = document.querySelector(".enlarge")

enlarge.addEventListener("click",()=> !cmd.classList.contains("big") ? cmd.classList.add("big") : cmd.classList.remove("big"))

