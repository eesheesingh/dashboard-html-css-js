let options = {
    chart: {
      type: 'line',
      height:"280px",
      fontFamily: 'Poppins',
      toolbar:{
        show:false,
      }
    },
    stroke:{
        curve:"smooth",
        width:8,
        colors:["#6e00ff"],
    },
   
    markers:{
        size:7,
        colors:["#6e00ff"],
    },
    grid: {
        strokeDashArray:10,
    },
    series: [{
      name: 'engagement',
      data: [3,4,5,15,9,6,7,1,25]
    }],
    xaxis: {
      engagment: ["Feb","March","April","May","June","July","Aug"]
    }
  }
  
  let chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

//Radial Bar charts
  let optionsRadial = {
    series: [50],
    chart: {
    height: 280,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '60%',
      },
      dataLabels:{
        name: {
            show:false,
        },
        value:{
            formatter: function(val){
                return parseInt(val);
            },
            color:'#555',
            fontSize:'40px',
            fontWeight:600,
        }
      }
    },
  },
  stroke:{
    lineCap:"round",
  },
 fill:{
    colors:["#ffb100"],
 },
 labels:[""]
  };



  let chartRadial = new ApexCharts(document.querySelector("#emailChart"), optionsRadial);
  chartRadial.render();


