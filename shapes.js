class Triangle {
    constructor() {
      this.color = 'black';
      this.text = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text) {
      this.text = text;
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    constructor() {
      this.color = 'black';
      this.text = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text) {
      this.text = text;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
              <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
    }
  }
  
  class Square {
    constructor() {
      this.color = 'black';
      this.text = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text) {
      this.text = text;
    }
  
    render() {
      return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />
              <text x="100" y="100" font-size="20" fill="white">${this.text}</text>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };