var ctx = document.getElementById("myChart");
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: ["Coffee drink", "HTML5", "CSS3", "Bootstrap 3", "Javascript", "Jquery", "Angular.js 1.5", "Angular Material", "Node.js", "Express.js", "Chart.js", "Git", "Mongodb"],
				        datasets: [{
				            label: 'Votes',
				            data: [100, 96, 95, 80, 50, 50, 65, 50, 20, 40, 60, 50, 45],
				            backgroundColor: [
				            	'#795548',
				                '#F44336',
				                '#E91E63',
				                '#9C27B0',
				                '#673AB7',
				                '#3F51B5',
				                '#009688',
				                '#4CAF50',
				                '#FFEB3B',
				                '#FF9800',
				                '#DD2C00',
				                '#D50000',
				                '#33691E'
				            ],
				            borderColor: [
				            	'#795548',
				                '#F44336',
				                '#E91E63',
				                '#9C27B0',
				                '#673AB7',
				                '#3F51B5',
				                '#009688',
				                '#4CAF50',
				                '#FFEB3B',
				                '#FF9800',
				                '#DD2C00',
				                '#D50000',
				                '#33691E'
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				        scales: {
				            yAxes: [{
				                ticks: {
				                	beginAtZero:true,
					                callback: function(value, index, values) {
	                     				return value + ' %';
	                    			}
				                }
				            }]
				        }
				    }
				});