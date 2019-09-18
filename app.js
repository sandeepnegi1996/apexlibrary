console.log("this is javascript file");







var options={
    chart:{
        type:'line',
        height:500,
        shadow:{
            enabled:true,
            color:'#000',
            top:18,
            left:7,
            blur:10,
            opacity:1
        },
        toolbar:{
            show:false
        }

    },

    series:[{
        name:'population',
        data:[17,10,44,22,78]
    }],

    title:{
        text:'Population Data of Countries',
        align:'left'
    },

    xaxis:{
        title:{
            text:'Country'
        },
        categories:["india","germany","us","australia","china"]
        
    },

    yaxis:{
        title:{
            text:'Population Count'
        },
        min:10,
        max:100
    }
}

var chart=new ApexCharts(document.querySelector('#chart'),options);

chart.render();









