document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.querySelector('form');
    const filterInputs = filterForm.querySelectorAll('select');
    const tableBody = document.querySelector('tbody');
    const genderSelect = document.querySelector('#Gender');
    const originalRows = Array.from(tableBody.querySelectorAll('tr')); // Store the original rows
    
    const filterTable = () => {
      const gender = genderSelect.value;
      const level = document.querySelector('#Level').value;
      const department = document.querySelector('#Department').value;
      const status = document.querySelector('#Status').value;
      
      tableBody.innerHTML = '';
  
      originalRows.forEach((row) => {
        const rowGender = row.querySelector('td:nth-child(3)').textContent;
        const rowLevel = row.querySelector('td:nth-child(5)').textContent;
        const rowDepartment = row.querySelector('td:nth-child(6)').textContent;
        const rowStatus = row.querySelector('td:nth-child(7)').textContent;
        
        const show =
          (gender === '' || rowGender === gender) &&
          (level === '' || rowLevel === level) &&
          (department === '' || rowDepartment === department) &&
          (status === '' || rowStatus === status);
        
        if (show) {
          tableBody.appendChild(row);
        }
      });
    };
    
    genderSelect.addEventListener('change', filterTable);
    
    filterInputs.forEach((input) => {
      input.addEventListener('change', filterTable);
    });
    
    filterTable();
  });
  
  