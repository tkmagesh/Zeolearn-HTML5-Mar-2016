$(function(){
		//Move the below code to the bugStorage and let the bugStorage emit the appropriate event
		window.addEventListener("storage", function(evtArg){
			var id = parseInt(evtArg.key);
			if (evtArg.newValue === null && evtArg.oldValue !== null){
				//an existing bug is removed
				$("li[data-bug-id=" + id + "]").remove();
				return;
			}
			if (evtArg.newValue !== null && evtArg.oldValue === null){
				//a new bug is added
				createBugItem(JSON.parse(evtArg.newValue));
				return;
			}
			//update the existing bug
			$("li[data-bug-id=" + id + "]").toggleClass("closed");
		});

		bugStorage.getAll().forEach(createBugItem);
		function createBugItem(bug){
			$("<li>")
				.attr("data-bug-id", bug.id)
				.html(bug.name)
				.addClass(bug.isClosed ? "closed" : "")
				.appendTo("#olBugList");
		}

		$("#btnAdd").click(function(){
			var newBug = bugStorage.addNew($("#txtBug").val());
			createBugItem(newBug);		
		});
		$("#olBugList").on("click", "li", function(){
			var $this = $(this);
			var id = parseInt($this.attr("data-bug-id"),10);
			$this.toggleClass("closed");
			bugStorage.toggle(id);
		});
		$("#btnRemoveClosed").click(function(){
			$("#olBugList >li.closed").each(function(){
				var id = parseInt($(this).attr("data-bug-id"),10);
				bugStorage.remove(id);
				$(this).remove();
			});
		});

	});