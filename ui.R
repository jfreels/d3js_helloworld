### Created by @jfreels4 on twitter
### github: https://github.com/jfreels

# code used from: https://github.com/timelyportfolio/shiny-d3-scatterplot

# creates a div with id based on reactiveBar input at bottom
reactiveBar <- function (outputId) {
  HTML(paste("<div id=\"", outputId, "\" class=\"shiny-network-output\"><svg /></div>", sep=""))
}

library(shiny)

# shiny UI
shinyUI(pageWithSidebar(
  
  # Application title
  headerPanel("Hello World! with shiny and d3js"),
  
  sidebarPanel(
      textInput(inputId="text",label="Type something:",value="Hello World!"),
      helpText(HTML("<br>*Created by: <a href = \"https://twitter.com/jfreels4\">@jfreels4</a>
                  <br>*github <a href = \"https://github.com/jfreels/fund_database\">code</a>
                  ")
      )
  ),
  mainPanel(
      # where the javascript lives
      includeHTML("d3js_helloworld.js"),
      reactiveBar(outputId = "hellWorld")
      )
  )
)