import React from "react";

class GradientAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.animateGradient();
  }

  animateGradient() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#a7d9de");
    gradient.addColorStop(0.5, "#a0baed");
    gradient.addColorStop(1, "#938efa");

    let offset = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${offset}, 100%, 70%)`);
      gradient.addColorStop(1, `hsl(${offset + 300}, 80%, 30%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      offset = (offset + 0.75) % 360;
      requestAnimationFrame(animate);
    };

    animate();
  }

  render() {
    return (
      <>
        <div>
          <canvas className="absolute w-full h-full" ref={this.canvasRef} />
        </div>
      </>
    );
  }
}

export default GradientAnimation;
