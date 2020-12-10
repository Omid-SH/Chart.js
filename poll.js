/* Part 1 */

const pollData = [
    {
      option: "Python",
      votes: 11,
      color: "rgb(255, 99, 132)"
    },
    {
      option: "Go",
      votes: 8,
      color: "rgb(54, 162, 235)"
    },
    {
      option: "Java",
      votes: 11,
      color: "rgb(36, 36, 36)"
    },
    {
      option: "C++",
      votes: 5,
      color: "rgb(255, 159, 64)"
    },
    {
      option: "C",
      votes: 3,
      color: "rgb(75, 192, 192)"
    },
    {
      option: "Rust",
      votes: 8,
      color: "rgb(255, 206, 86)"
    },
    {
      option: "Swift",
      votes: 10,
      color: "rgb(153, 102, 255)"
    }
  ];
  
  const pollForm = document.querySelector("#pollForm");
  
  pollForm.addEventListener("submit", pollFormSubmit);
  
  function pollFormSubmit(event) {
    event.preventDefault();
    const pollOptionInput = pollForm.querySelector("input[name='pollOptions']:checked");
    if(pollOptionInput) {
      const pollOptionValue = pollOptionInput.value;
      pollData.find(pollOption => pollOption.option === pollOptionValue).votes++;
      pollChart.data.datasets[0].data = pollData.map(pollOption => pollOption.votes);
      pollChart.update();
      pollForm.reset();
    }
  }
  
  function rgbToRgba(rgb, alpha=1) {
    return `rgba(${rgb.substring(rgb.indexOf('(')+1, rgb.length-1).split(',').join()}, ${alpha})`;
  }
  
  Chart.defaults.global.defaultFontFamily = '"Comic Sans MS", cursive, sans-serif';
  
  const ctx = document.getElementById('chart').getContext('2d');
  const pollChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: pollData.map(pollOption => pollOption.option),
      datasets: [{
        label: '# of Votes',
        data: pollData.map(pollOption => pollOption.votes),
        backgroundColor: pollData.map(pollOption => rgbToRgba(pollOption.color, 0.75)),
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      title: {
        display: true,
        text: 'Favorite programming language',
        fontColor: "#333",
        fontSize: 20,
        padding: 20
      },
      legend: {
        display: false,
      }
    }
  });

  /* Part 2 */

/*
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
        }, {
            label: 'Line Dataset',
            data: [30, 50, 20, 10],

            // Changes this dataset to become a line
            type: 'line'
        }],
        labels: ['January', 'February', 'March', 'April']
    },
}); */

  /* Part 3 */

/*
var ctx = document.getElementById('myChart');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
            data: [45.378, 25.1562, 40.9899, 23.767],
        }],
    },
    options: {
        tooltips: {
            // Disable the on-canvas tooltip
            enabled: false,

            custom: function(tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
            }
        }
    }
}); */