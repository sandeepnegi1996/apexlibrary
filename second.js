console.log("this is the second file");






var options={

    chart:{
        height:300,
        width:500,
        type:'line',
        animation:{
            enabled:true,
            easing:'linear',
            dynamicAnimation:{
                speed:10000
            }
        },
        toolbar:{
            show:false
        },
        zoom:{
            enabled:false
        }
    
    },

    dataLabels:{
        enabled:false
    },
    stroke:{
        curve:'smooth'
    },
    series:[{
        data:data
    }],
    title:{
        text:'Realtime Acceleration chart',
        align:'right'
    },
    markers:{
        size:0
    },
    xaxis:{
        type:'datetime',
        range:XAXISRANGE,
    },
    yaxis:{
        max:100
    },
    legend:{
        show:false
    },

    
}
    var chart=new ApexCharts(
        document.querySelector("#chart2"),
        options
    );

    chart.render();

    //now writing the function to update the chart

    window.setInterval(function () {
        getNewSeries(lastDate,{
            min:10,
            max:90
        })
        chart.updateSeries([{
            data:data
        }])
    },1000)


var lastDate=0;

var data=[]
var TICKINTERVAL=86400000
var XAXISRANGE=777600000

    function getDayWiseTimeSeries(baseval,count,yrange) {
        var i=0;
        while (i<count) {
            var x=baseval;
            var y=Math.floor(Math.random()*(yrange.max-yrange.min+1))+yrange.min;

            data.push({
                x,y
            });
            lastDate=baseval;
            baseval+=TICKINTERVAL;
            i++
        }
    }

    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(),10,{
        min:10,
        max:90
    })


    function getNewSeries(baseval,yrange) {
        var newDate=baseval+TICKINTERVAL;
        lastDate=newDate
        for (let i = 0; i< data.length-10; i++) {
          
            data[i].x=newDate-XAXISRANGE-TICKINTERVAL
            data[i].y=0
           
        }
        data.push({
            x:newDate,
            y:Math.floor(Math.random()*(yrange.max-yrange.min+1)+yrange.min)
        })
        
    }

    function resetData() {
        data=data.slice(data.length-10,data.length);
        
    }