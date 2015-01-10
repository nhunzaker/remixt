import React from "react/addons"
import App   from "../app"

let TestUtils = React.addons.TestUtils

describe("App Component", function() {

  it ("displays 'Success!' when it mounts", function() {
    let component = TestUtils.renderIntoDocument(<App />)

    component.getDOMNode().textContent.should.match(/Success\!/)
  })


})
