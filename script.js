let editingIndex = -1;
let data = [];

function saveData() {
  const name = document.getElementById('nameInput').value;
  const age = document.getElementById('ageInput').value;
  const gender = document.getElementById('genderInput').value;
  const mobile = document.getElementById('mobileInput').value;

  if (editingIndex > -1) {
    data[editingIndex] = { name, age, gender, mobile };
    editingIndex = -1;
  } else {
    data.push({ name, age, gender, mobile });
  }

  renderTable();
  clearInputs();
}

function editData(index) {
  editingIndex = index;
  const { name, age, gender, mobile } = data[index];
  document.getElementById('nameInput').value = name;
  document.getElementById('ageInput').value = age;
  document.getElementById('genderInput').value = gender;
  document.getElementById('mobileInput').value = mobile;
}
function renderTable() {
    const tbody = document.getElementById('dataBody');
    tbody.innerHTML = '';
    data.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.gender}</td>
        <td>${item.mobile}</td>
        <td>
          <button onclick="editData(${index})">Edit</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  


function clearInputs() {
  document.getElementById('nameInput').value = '';
  document.getElementById('ageInput').value = '';
  document.getElementById('genderInput').value = 'male';
  document.getElementById('mobileInput').value = '';
}

function call() {
    const index = prompt("Enter the index of the person to call:");
    if (index !== null && index !== "") {
      const person = data[index];
      alert(`Calling ${person.name} at ${person.mobile}`);
    }
  }

  async function startCall() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  }
  
function cut() {
}
