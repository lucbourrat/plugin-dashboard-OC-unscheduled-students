function addToolBar() {
	// Get Elements 
	let container = document.getElementById("mainContent").children[1];
	let studentsTabDiv = container.getElementsByTagName("div")[0];
	
	// Create toolBar
	let toolBarSection = document.createElement("div");
	toolBarSection.classList.add("toolBarSection");
	
	// Create button 1
	let toolBarSectionButton1 = document.createElement("button");
	toolBarSectionButton1.classList.add("toolBarSectionButton");
	//
	let toolBarSectionButtonSpan1 = document.createElement("span");
	toolBarSectionButtonSpan1.classList.add("dom-services-3-MuiButton-label");
	//
	let toolBarSectionButtonSpanSpan1 = document.createElement("span");
	toolBarSectionButtonSpanSpan1.textContent = "MAJ la liste d'étudiants dans la BDD";
	toolBarSectionButtonSpanSpan1.style.textTransform = "none";
	
	// addEventListener button 1
	toolBarSectionButton1.addEventListener("click", getStudentsList);
	// Insert button 1
	toolBarSectionButtonSpan1.appendChild(toolBarSectionButtonSpanSpan1);
	toolBarSectionButton1.appendChild(toolBarSectionButtonSpan1);
	toolBarSection.appendChild(toolBarSectionButton1);
	// Insert toolBar
	container.insertBefore(toolBarSection, studentsTabDiv);
}
	
function getStudentsList() {
	// Get Students List Element
	let studentsTabTr = document.getElementById("students_1").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	
	// Init studentsListTab
	let studentsListTab = [];
	
	// Set studentsListTab
	for (student of studentsTabTr) {
		studentsListTab.push(student.getElementsByTagName("td")[0].getElementsByTagName("a")[0].textContent);
	}
	
	// Update studentsListTab in localStorage
	localStorage.setItem('studentsListTab', JSON.stringify(studentsListTab));
	alert("Liste des étudiants MAJ en BDD");
}
	
function observerStudentsTableLoading() {
	let containerToObserve = document.getElementById("mainContentWithHeader");
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		let studentsTabTr = document.getElementById("students_1").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
		if (studentsTabTr) {
			console.log("STUDENTS TABLE LOADED");
		    observer.disconnect();
		    addToolBar();
		}
	}
	
	observer.observe(containerToObserve, options);
}

observerStudentsTableLoading();