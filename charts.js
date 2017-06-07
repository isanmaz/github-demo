 var bubbleChart = function(){
    
    var width = 600,
        height=400;
    
    function chart(selection){
        d3.csv('data.csv', function(error, our_data) {
    var data = our_data; //here you can do what you want with the data
}
        
        
    }
    chart.width = function(value) {
        if (!arguments.length) { return width; }
        width = value;

        return chart;
    }
    chart.height = function(value) {
        if (!arguments.length) { return height; }
        height = value;

        return chart;
    }
    
    return chart;
}

var chart = bubbleChart().width(300).height(200);