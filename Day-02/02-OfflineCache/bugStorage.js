var bugStorage = (function(){
		var storage = window.localStorage;
		var maxBugId = 0;
		
		function getAllBugs(){
			var result = [];
			for(var i=0; i<storage.length; i++){
				var key = storage.key(i);
				var data = storage.getItem(key);
				var bug = JSON.parse(data);
				maxBugId = maxBugId > bug.id ? maxBugId : bug.id;
				result.push(bug);
			}
			return result;
		}
		function addNew(bugName){
			var newBug = {
				id : ++maxBugId,
				name : bugName,
				isClosed : false
			}
			storage.setItem(newBug.id, JSON.stringify(newBug));
			return newBug;
		}
		function toggleBug(id){
			var bug = JSON.parse(storage.getItem(id));
			bug.isClosed = !bug.isClosed;
			storage.setItem(id, JSON.stringify(bug));
		}
		function removeBug(id){
			storage.removeItem(id);
		}
		return {
			getAll : getAllBugs,
			addNew : addNew,
			toggle : toggleBug,
			remove : removeBug

		};
	})()