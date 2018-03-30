/* Intro start */
function createChart(){
  var ctx = document.getElementById("canvas").getContext("2d");
  var canvas = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels : ["잠", "집안 산책", "공놀이", "아침잠", "낮잠"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f"
        ],
        data: [8, 2, 2, 6, 6]
      }]
    }
  });
}
/* Intro end */
