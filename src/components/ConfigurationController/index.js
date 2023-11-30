import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          const ToggleShowContent = () => {
            onToggleShowContent()
          }

          const ToggleShowLeftNavbar = () => {
            onToggleShowLeftNavbar()
          }
          const ToggleShowRightNavbar = () => {
            onToggleShowRightNavbar()
          }
          return (
            <div className="controllerbg">
              <h1>Layout</h1>
              <ul className="ulcontrollersty">
                <li>
                  <input
                    type="checkbox"
                    id="content"
                    checked={showContent}
                    onClick={ToggleShowContent}
                  />
                  <label htmlFor="content">Content</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="leftnavbar"
                    checked={showLeftNavbar}
                    onClick={ToggleShowLeftNavbar}
                  />
                  <label htmlFor="leftnavbar">Left Navbar</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Rightnavbar"
                    checked={showRightNavbar}
                    onClick={ToggleShowRightNavbar}
                  />
                  <label htmlFor="Rightnavbar">Right Navbar</label>
                </li>
              </ul>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default ConfigurationController
