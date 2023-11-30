import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  leftnavbar = () => (
    <div className="leftnav">
      <h1>Left Navbar Menu</h1>
      <ul className="laftulsty">
        <li>
          <p>Item 1</p>
        </li>
        <li>
          <p>Item 2</p>
        </li>
        <li>
          <p>Item 3</p>
        </li>
        <li>
          <p>Item 4</p>
        </li>
      </ul>
    </div>
  )

  content = () => (
    <div className="contentcont">
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam.
      </p>
    </div>
  )

  rightnavbar = () => (
    <div className="rightnavbar">
      <h1>Right Navbar</h1>
      <div>
        <p className="adacontad">Ad 1</p>
      </div>

      <div className="adacontad">
        <p>Ad 2</p>
      </div>
    </div>
  )

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="bodycontainer">
              {showLeftNavbar === true ? this.leftnavbar() : null}
              {showContent === true ? this.content() : null}
              {showRightNavbar === true ? this.rightnavbar() : null}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body
