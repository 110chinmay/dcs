'use strict';

/**
 * @ngdoc filter
 * @name dcsUiApp.filter:milestoneFilter
 * @function
 * @description
 * # milestoneFilter
 * Filter in the dcsUiApp.
 */
angular.module('dcsUiApp')
	.filter('customFilter', function () {
		return function(data, selected, field) {
			var filtered = [];
			if(selected.length > 0){
				for(var i = 0; i < data.length; i++) {
					var item = data[i];
					for(var z = 0; z < selected.length; z++ ) {
						if(field == 'milestone'){
							if(selected[z] == item['pr']['releaseBranchMergedTo']) {
								filtered.push(data[i]);
							} 
						}else if(field == 'labels'){
							var labels = item['pr']['prLabels'];
							if(labels != 'null' && labels != null && labels != undefined){
								if(labels.length){
									var labelsArr = labels.map(function(a) {return a.prLabelName;});
									if(labelsArr.indexOf(selected[z]) > -1) {
										filtered.push(data[i]);
									}  
								}  
							}     
						}else if(field == 'team'){
							if(selected[z] == item[field]) {
								filtered.push(data[i]);
							} 
						}
					}
				}
			} else {
				filtered = data;
			}
			return filtered;
		};
	});
