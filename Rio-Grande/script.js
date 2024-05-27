document.addEventListener('DOMContentLoaded', function() {
	var hora = document.getElementById('hora');
	setInterval(function() {
		hora.innerHTML = new Date().toLocaleTimeString();
	}, 1000);
	
	var tablinks = document.getElementsByClassName('tablinks');
	for (var i = 0; i < tablinks.length; i++) {
		tablinks[i].addEventListener('click', function(e) {
			var currentTab = document.getElementsByClassName('active')[0];
			currentTab.className = currentTab.className.replace(' active', '');
			e.target.className += ' active';
			var tabContent = document.getElementsByClassName('tab-content');
			for (var j = 0; j < tabContent.length; j++) {
				tabContent[j].className = tabContent[j].className.replace(' active', '');
			}
			document.getElementById(e.target.dataset.tab).className += ' active';
		});
	}
	
	document.getElementById('esporte').className += ' active';
	document.getElementById('esporte-content').className += ' active';
});