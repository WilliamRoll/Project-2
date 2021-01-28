// barchart??

var svgWidth = 900;
var svgHeight = 460;

//margin for charts are here 
var margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// svg wrapper
var svg = d3
    .select("#color_barchart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

//append
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);




d3.json("/raw-web-api", function (myData) { 
    data = myData
    console.log(data); 



    var gray_approach_count=0
    var cinnamon_approach_count=0
    var black_approach_count=0


    // loop
    for (var index = 0; index < data.length; index++){
        var approach = data[index].approaches;
        var primary_color = data[index].primary_fur_color;
        // console.log(primary_color)
        
        if(approach=="True" && primary_color=="Gray"){
            gray_approach_count+=1
        }
        else if (approach=="True" && primary_color=="Cinnamon") {
            cinnamon_approach_count+=1
            }
        else if (approach=="True" && primary_color=="Black") {
            black_approach_count+=1
        }

        
    }


    var true_dict = {
        "Gray": gray_approach_count,
        "Cinnamon": cinnamon_approach_count,
        "Black": black_approach_count
    };
    console.log(true_dict)
    
    // converting data into array
    const true_array = Object.entries(true_dict).map(([key, value]) => ({
    key: key,
    value: value
    }));
    
    console.log(true_array)


    });
