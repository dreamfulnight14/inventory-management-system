document.addEventListener('DOMContentLoaded', () => {
  // Sample data for devices and software
  const devices = [
    {
      id: 1,
      type: 'Laptop',
      serialNumber: '12345',
      model: 'Model X',
      inventoryNumber: 1,
      owner: 'John Doe',
      details: 'Details',
    },
  ]

  const software = [
    {
      id: 1,
      name: 'Software A',
      serialNumber: '67890',
      purchaseDate: '2023-01-01',
      licenses: '10/15',
    },
  ]

  // Handle login
  window.handleLogin = (event) => {
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username === 'admin' && password === 'password') {
      window.location.href = 'manage-devices.html'
    } else {
      document.getElementById('login-error').innerText =
        'Invalid username or password.'
    }
  }

  // Render devices
  const deviceTableBody = document.getElementById('device-table-body')
  if (deviceTableBody) {
    devices.forEach((device) => {
      const row = document.createElement('tr')
      row.innerHTML = `
              <td><input type="checkbox"></td>
              <td>${device.id}</td>
              <td>${device.type}</td>
              <td>${device.serialNumber}</td>
              <td>${device.model}</td>
              <td>${device.inventoryNumber}</td>
              <td>${device.owner}</td>
              <td>${device.details}</td>
              <td>
                  <button type="button">Edit</button>
                  <button type="button">Delete</button>
              </td>
          `
      deviceTableBody.appendChild(row)
    })
  }

  // Render software
  const softwareTableBody = document.getElementById('software-table-body')
  if (softwareTableBody) {
    software.forEach((sw) => {
      const row = document.createElement('tr')
      row.innerHTML = `
              <td><input type="checkbox"></td>
              <td>${sw.id}</td>
              <td>${sw.name}</td>
              <td>${sw.serialNumber}</td>
              <td>${sw.purchaseDate}</td>
              <td>${sw.licenses}</td>
              <td>
                  <button type="button">Edit</button>
                  <button type="button">Delete</button>
                  <button type="button">Manage Licenses</button>
              </td>
          `
      softwareTableBody.appendChild(row)
    })
  }

  window.searchDevices = () => {
    const query = document.getElementById('search-devices').value.toLowerCase()
    const filteredDevices = devices.filter((device) =>
      device.type.toLowerCase().includes(query)
    )
    deviceTableBody.innerHTML = ''
    filteredDevices.forEach((device) => {
      const row = document.createElement('tr')
      row.innerHTML = `
              <td><input type="checkbox"></td>
              <td>${device.id}</td>
              <td>${device.type}</td>
              <td>${device.serialNumber}</td>
              <td>${device.model}</td>
              <td>${device.inventoryNumber}</td>
              <td>${device.owner}</td>
              <td>${device.details}</td>
              <td>
                  <button type="button">Edit</button>
                  <button type="button">Delete</button>
              </td>
          `
      deviceTableBody.appendChild(row)
    })
  }

  window.searchSoftware = () => {
    const query = document.getElementById('search-software').value.toLowerCase()
    const filteredSoftware = software.filter((sw) =>
      sw.name.toLowerCase().includes(query)
    )
    softwareTableBody.innerHTML = ''
    filteredSoftware.forEach((sw) => {
      const row = document.createElement('tr')
      row.innerHTML = `
              <td><input type="checkbox"></td>
              <td>${sw.id}</td>
              <td>${sw.name}</td>
              <td>${sw.serialNumber}</td>
              <td>${sw.purchaseDate}</td>
              <td>${sw.licenses}</td>
              <td>
                  <button type="button">Edit</button>
                  <button type="button">Delete</button>
                  <button type="button">Manage Licenses</button>
              </td>
          `
      softwareTableBody.appendChild(row)
    })
  }

  window.addNewDevice = () => {
    // Add functionality to add new device
    alert('Add new device functionality is not implemented yet.')
  }

  window.addNewSoftware = () => {
    // Add functionality to add new software
    alert('Add new software functionality is not implemented yet.')
  }

  window.deleteSelectedDevices = () => {
    // Add functionality to delete selected devices
    alert('Delete selected devices functionality is not implemented yet.')
  }

  window.deleteSelectedSoftware = () => {
    // Add functionality to delete selected software
    alert('Delete selected software functionality is not implemented yet.')
  }
})
