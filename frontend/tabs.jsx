import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  selectArticle(index) {
    this.setState({ index });
  }

  render() {
    return (
      <section>
        <ul className="tab-widget">
          {
            this.props.tabs.map((tab, idx) => (
            <li key={tab.title}>
              <h1 className = {idx === this.state.index ? "selected tab-header": "tab-header"} onClick={() =>
                  this.selectArticle(idx)} >
                  {tab.title}</h1>
            </li>
          ))
        }
        </ul>
          <p>{this.props.tabs[this.state.index].content}</p>
      </section>
    );
  }
}

export default Tabs;
