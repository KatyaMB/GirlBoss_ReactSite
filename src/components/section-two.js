import React, { Component } from 'react';

// Creating the second section with a class that passes props
class SectionTwo extends Component {
  render() {
    return (
      <div className="sectionTwo">
        <h2 id="section-two-heading">Greatest Hits</h2>
        <div className="imageContainer">
          <img id="section-two-image-one" src={this.props.imageUrl1} alt={this.props.imageAlt1} />
          <h2 id="section-two-heading-one">{this.props.title1}</h2>
          <p id="section-two-para-one">{this.props.description1}</p>
        </div>
        <div className="imageContainer">
          <img id="section-two-image-two" src={this.props.imageUrl2} alt={this.props.imageAlt2} />
          <h2 id="section-two-heading-two">{this.props.title2}</h2>
          <p id="section-two-para-two">{this.props.description2}</p>
        </div>
        <div className="imageContainer">
          <img id="section-two-image-three" src={this.props.imageUrl3} alt={this.props.imageAlt3} />
          <h2 id="section-two-heading-three">{this.props.title3}</h2>
          <p id="section-two-para-three">{this.props.description3}</p>
        </div>
      </div>
    );
  }
}

// Exporting the second section
export default SectionTwo;