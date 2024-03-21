const projectData = {
    "projects": [
      {
        "id": 1,
        "name": "Project 1",
        "tasks": [
          {
            "title": "Design Database Schema",
            "assignee": "Alex",
            "status": "Done",
            "timeTaken": "2 days"
          },
          {
            "title": "Implement Authentication System",
            "assignee": "Jordan",
            "status": "In Progress",
            "timeTaken": "3 days"
          }
        ]
      },
      {
        "id": 1,
        "name": "Project 2",
        "tasks": []
      }
    ]
  }

const taskData = {
  'Done': 10,
  'Blocked': 2,
  'Open': 5,
  'In Progress': 7
};

const resourceData = {
  'Frontend Developer': 3,
  'Backend Developer': 4,
  'DevOps Engineer': 2,
  'Project Manager': 1,
  'Quality Assurance': 2
};

document.addEventListener('DOMContentLoaded', function() {
  updateTaskStatusDial(taskData);
  updateResourcesDial(resourceData);
  populateProjects(projectData.projects);
  populateTasks(projectData.projects[0].tasks);
  });
  
  function populateProjects(projects) {
    const projectsContainer = document.querySelector('.projects-accordion'); // Adjust selector as necessary
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'project';
      projectElement.textContent = project.name;
      // Append or handle project tasks as needed
      projectsContainer.appendChild(projectElement);
    });
  }

  function populateTasks(tasks) {
    const tbody = document.querySelector('.task-list tbody');
    tbody.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const row = tbody.insertRow();
        
        // Populate task details
        const titleCell = row.insertCell();
        titleCell.textContent = task.title;

        const assigneeCell = row.insertCell();
        assigneeCell.textContent = task.assignee;

        const statusCell = row.insertCell();
        statusCell.textContent = task.status;

        const timeTakenCell = row.insertCell();
        timeTakenCell.textContent = task.timeTaken;

        // Add action buttons
        const actionsCell = row.insertCell();
        
        // Edit button
        const editButton = document.createElement('button');
        editButton.innerHTML = `<img src="${staticUrls.editIcon}" alt="Edit" style="height: 20px; width: 20px;">`; // Use the editIcon URL
        editButton.classList.add('action-button', 'edit-button');
        editButton.onclick = function() {
            // Add your edit functionality here
            console.log('Edit Task:', task.title);
        };

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<img src="${staticUrls.deleteIcon}" alt="Delete" style="height: 20px; width: 20px;">`; // Replace src with your icon path
        deleteButton.classList.add('action-button', 'delete-button'); // Add classes for styling
        deleteButton.onclick = function() {
            // Add your delete functionality here
            console.log('Delete Task:', task.title);
        };

        // Append buttons to the actions cell
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
    });
  }
  
function updateTaskStatusDial(taskData) {
  const values = Object.values(taskData);
  const labels = Object.keys(taskData);
  
  const data = [
    {
      type: "pie",
      values: values,
      labels: labels,
      hole: .75,
      textinfo: "label+value",
      textposition: "outside",
      automargin: true
    }
  ];
  
  const layout = {
    height: 250,
    width: 532,
    margin: { t: 0, b: 0, l: 0, r: 0 },
    showlegend: true
  };
  
  Plotly.newPlot('taskStatusDial', data, layout);
}

// Function to create a resources dial
function updateResourcesDial(resourceData) {
  const values = Object.values(resourceData);
  const labels = Object.keys(resourceData);

  var data = [
      {
          type: "pie",
          values: values,
          labels: labels,
          hole: .75,
          textinfo: "label+value",
          textposition: "outside",
          automargin: true
      }
  ];

  var layout = {
      height: 250,
      width: 532,
      margin: { "t": 0, "b": 0, "l": 0, "r": 0 },
      showlegend: true
  };

  Plotly.newPlot('resourcesDial', data, layout);
}