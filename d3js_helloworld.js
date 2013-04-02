<style>
</style>

<script src="http://d3js.org/d3.v3.min.js"></script>

<script type="text/javascript">
  var networkOutputBinding = new Shiny.OutputBinding();
  
  $.extend(networkOutputBinding, {
    find: function(scope) {
      return $(scope).find('.shiny-network-output');
    },
    renderValue: function(el, data) {
        
        //remove the old graph
          var svg = d3.select(el).select("svg");

          svg.remove();
          
          $(el).html("");

var w = 500,
    h = 500;

// add svg
var svg = d3.select(el)
        .append("svg")
        .attr("height",h)
        .attr("width",w);

// add text
var text = svg.append("text")
              .attr("font-size",0)
              .attr("x",50)
              .attr("y",100)
              .transition()
              .duration(500)
              .attr("fill","red")
              .attr("font-size",50)
// data variable is pulled from "textBox" variable from server.R file
              .text(data);

    }
  });
  Shiny.outputBindings.register(networkOutputBinding, 'timelyportfolio.networkbinding');




</script>
