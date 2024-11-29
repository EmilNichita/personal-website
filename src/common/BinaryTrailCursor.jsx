import React, { useEffect, useRef } from "react";

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const BinaryTrailCursor = ({
  maxDistance,
  particleSize,
  particleSpeedModifier,
  particleSpeedOffset,
  particleCreationTime,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    // const devicePixelRatio = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // ctx.scale(devicePixelRatio, devicePixelRatio);

    let hue = 0;
    let particleCreationDelay = 0;

    const createParticle = (x, y) => {
      const size = particleSize;
      const color = `hsl(${hue},40%,80%)`;
      const speedX =
        Math.random() * particleSpeedModifier - particleSpeedOffset;
      const speedY =
        Math.random() * particleSpeedModifier - particleSpeedOffset;

      return { x, y, size, color, speedX, speedY };
    };
    const connectParticles = () => {
      //these two for loops are used for comparing
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          //calculating the distance between the two particles
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance <= maxDistance) {
            const opacity = 1 - distance / maxDistance; //this is used to calculate the opacity of the line farthest away leseser opacity
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = particles[i].color;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hue = (hue + 1) % 256;
      connectParticles();
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size -= particleSize / 200;
        if (particle.size <= 0.3) {
          particles.splice(index, 1);
        }

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    animate();
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      particleCreationDelay += 1;
      if (particleCreationDelay > particleCreationTime) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        particles.push(createParticle(x, y));

        console.log("x, y", x, y);
        console.log("clinet", event.clientX, event.clientY);
        console.log("page", event.pageX, event.pageY);

        particleCreationDelay = 0;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [devicePixelRatio]);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default BinaryTrailCursor;
