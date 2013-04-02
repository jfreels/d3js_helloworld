### Created by @jfreels4 on twitter
### github: https://github.com/jfreels

# code used from: https://github.com/timelyportfolio/shiny-d3-scatterplot

library(shiny)

### Shiny Server
shinyServer(function(input, output) {

  textBox<-reactive({
  	input$text
  	})

  output$helloWorld<-reactive({ textBox() })

})