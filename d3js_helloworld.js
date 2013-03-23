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
//          var svg = d3.select(el).select("svg");
//
//          svg.remove();
//          
//          $(el).html("");

    }
  });
  Shiny.outputBindings.register(networkOutputBinding, 'timelyportfolio.networkbinding');


</script>
