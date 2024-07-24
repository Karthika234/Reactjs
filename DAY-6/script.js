document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('studentName').value;
        const age = document.getElementById('studentAge').value;

        if (name && age) {
            addStudent(name, age);
            studentForm.reset();
        }
    });

    function addStudent(name, age) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            ${name} - Age: ${age}
            <button class="btn btn-danger btn-sm float-right delete">Delete</button>
        `;

        studentList.appendChild(li);
    }

    studentList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });
});
