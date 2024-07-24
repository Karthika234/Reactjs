document.addEventListener('DOMContentLoaded', () => {
    const addPatientBtn = document.getElementById('addPatientBtn');
    const searchBtn = document.getElementById('searchBtn');
    const patientList = document.getElementById('patientList');

    addPatientBtn.addEventListener('click', () => {
        const name = document.getElementById('patientName').value;
        const age = document.getElementById('patientAge').value;

        if (name.trim() === '' || age.trim() === '') {
            alert('Please enter patient name and age.');
            return;
        }

        addPatient(name, age);
    });

    searchBtn.addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        searchPatients(searchInput);
    });

    function addPatient(name, age) {
        const patientItem = document.createElement('div');
        patientItem.classList.add('patient-item');
        patientItem.textContent = `Name: ${name}, Age: ${age}`;
        patientList.appendChild(patientItem);
    }

    function searchPatients(query) {
        const patientItems = document.querySelectorAll('.patient-item');
        patientItems.forEach(patientItem => {
            const patientInfo = patientItem.textContent.toLowerCase();
            if (patientInfo.includes(query)) {
                patientItem.style.display = 'block';
            } else {
                patientItem.style.display = 'none';
            }
        });
    }
});
