import React from "react";
import { Container, Row, Col } from 'reactstrap';


//AppHeader[Class] Render:: Final Header content for the app
class AppHeader extends React.Component {   
  static propTypes = {

  };    
  // timeNowFunc[InsideClassFunc] Return the greeting depend in current time
  timeNowFunc() {
      // Date and Time
      const date = new Date()
      //const date = new Date(2019,3,1,22)
      const hours = date.getHours()
      let timeGreetingNow
  
      const styleGreeting = {
          fontSize: "1.1em",
          fontStyle: "italic",
          fontWeight: "bold",
          alignItems: "middle",
          alignContent: "center",
          textAlign: "right",
      }
      // Display on time
      if (hours < 12) {
          timeGreetingNow ="morning"
          styleGreeting.color= "#C87290"
          return(<h2 style={styleGreeting}> !! Good {timeGreetingNow} !!</h2>)
      } else if (hours >=12 && hours < 17) {
          timeGreetingNow ="afternoon"
          styleGreeting.color= "#BCA590"
          return(<h2 style={styleGreeting}> !! Good {timeGreetingNow} !!</h2>) 
      } else if (hours >=17 && hours < 20) {
          timeGreetingNow ="evening"
          styleGreeting.color= "#AF749A"
          return(<h2 style={styleGreeting}> !! Good {timeGreetingNow} !!</h2>) 
      } else {
          timeGreetingNow ="night"
          styleGreeting.color= "#161090"
          return(<h2 style={styleGreeting}> !! Good {timeGreetingNow} !!</h2>) 
      }
    }
    
    render (){
        // Get the right greeting 
        const greeting = this.timeNowFunc()

        //Header Styling 
        const stylesHeader = {
                backgroundColor: "#487F7F",
                minHeight: "5vh",
                /*display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",*/
                fontSize: "calc(10px + 2vmin)",
                color: "white",
        }
        const  styleAppName = {
                color: "#F0D2CC",
                alignItems: "middle",
                alignContent: "center",
                textAlign: "left",
        }
        const  styleCols = {
            display: "flex",
            flexDirection: "column",
            alignItems: "middle",
        }

        //<p> Header form shared component.</p>
        return (
            <header style={stylesHeader}>
                <div className="common-app-header">
                    <Container>
                        <Row >
                            <Col xs="auto" style={styleCols} ><p style={styleAppName}>Welcome to <span> <strong>{this.props.appName}</strong> </span> </p></Col>
                            <Col xs="auto" style={styleCols}> {greeting} </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        )
    }
}
export default AppHeader