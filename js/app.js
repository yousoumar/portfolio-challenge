const filters = document.querySelectorAll('.filter');
const activeFilter = document.querySelector('.filter.active');
const projects = document.querySelectorAll('.project');

projects.forEach((project) => {    
    if (project.classList.contains(activeFilter.getAttribute('data'))){
        project.classList.remove("hide");
        project.classList.add("show");
       
    }
});

filters.forEach((filter)=>{
    filter.addEventListener('click', ()=>{
        filters.forEach((filter)=>{
            filter.classList.remove('active');
        });
        filter.classList.add('active');
        projects.forEach((project) => {
            
            if (project.classList.contains(filter.getAttribute('data'))){
                project.classList.remove("hide");
                project.classList.add("show");
               
            }else{
                project.classList.remove("show");
                project.classList.add("hide");
            }
        });
    });
});
