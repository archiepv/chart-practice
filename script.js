      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
			//google.charts.setOnLoadCallback(drawAllocationsChart);
			//google.charts.setOnLoadCallback(drawSemestersChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
				// Two times 0-100, five times 100-200, three times 200-300
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Score Range');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['0-100', 2],
          ['100-200', 5],
          ['200-300', 3]
          
        ]);

        // Set chart options
        var options = {'title':'Pizza Toppings',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

			function drawAllocationsChart() {

        // Create the data table.
				// Two times 0-100, five times 100-200, three times 200-300
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Expense');
        data.addColumn('number', 'Cents');
        data.addRows([
          ['Administrative Costs', 4],
          ['Fundraising', 16],
					['Youth Programs', 36],
          ['Adult Programs', 44]
          
        ]);

        // Set chart options
        var options = {'title':'Each Dollar Donated Goes To',
                       'width':400,
                       'height':300,
											 'colors': ['#8AD1C2', '#9F8AD1', '#D18A99', '#BCD18A'],
											 'pieHole': 0.5};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('allocations'));
        chart.draw(data, options);
      }

			function drawSemestersChart() {

        // Create the data table.
				// Two times 0-100, five times 100-200, three times 200-300
        var data = new google.visualization.arrayToDataTable();
        data.addColumn('string', 'Expense');
        data.addColumn('number', 'Cents');
        data.addRows([
					['Semester', 'Credits', {role: 'style'}],
          ['Fall 2018', 0, '#114789'],
					['Spring 2019', 0, '#8faeff'],
					['Fall 2019', 1, '#114789'],
					['Spring 2020', 1, '#8faeff'],
					['Fall 2020', 3, '#114789f'],
          ['Spring 2021', 3, '#8faeff'],
					['Fall 2021', 3, '#114789'],
          ['Spring 2022', 3, '#8faeff']
        ]);

        // Set chart options
        var options = {'title':'Each Dollar Donated Goes To',
                       'width':400,
                       'height':300,
											};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('semesters'));
        chart.draw(data, options);
      }

			window.onload = function(){
				//console.log("window is loaded!!")
				//Event listeners for each button
				document.getElementById('semester-trigger').addEventListener('click', function(){
					document.getElementById('semesters').innerHTML = ""
					document.getElementById('chart_div').innerHTML = ""
					document.getElementById('allocations').innerHTML = ""
					drawSemestersChart();
				})
				
				document.getElementById('pizza-trigger').addEventListener('click', function(){
					document.getElementById('semesters').innerHTML = ""
					document.getElementById('chart_div').innerHTML = ""
					document.getElementById('allocations').innerHTML = ""
					drawChart();
				})
				
				document.getElementById('allocations-trigger').addEventListener('click', function(){
					document.getElementById('semesters').innerHTML = ""
					document.getElementById('chart_div').innerHTML = ""
					document.getElementById('allocations').innerHTML = ""
					drawAllocationsChart();
				})
				
				
			}
