'use client';
import { useEffect, useRef, useState } from 'react';
import { SiReact, SiNodedotjs, SiPython, SiDocker, SiKubernetes, SiJavascript, SiHtml5, SiPandas, SiTensorflow, SiOracle, SiGooglecloud, SiMongodb } from 'react-icons/si';
import { FaCloud, FaCogs, FaLayerGroup, FaAws } from 'react-icons/fa';

const tags = [
    { Icon: FaCloud, color: "#38bdf8", label: "Cloud" },
    { Icon: SiMongodb, color: "#38bdf8", label: "MongoDB" },

    { Icon: SiNodedotjs, color: "#38bdf8", label: "Node.js" },
    { Icon: FaCogs, color: "#818cf8", label: "DevOps" },
    { Icon: FaLayerGroup, color: "#34d399", label: "MERN" },
    { Icon: SiPython, color: "#fbbf24", label: "Python" },
    { Icon: SiPandas, color: "#f472b6", label: "Pandas" },
    { Icon: SiTensorflow, color: "#f87171", label: "TensorFlow" },
    { Icon: SiDocker, color: "#22d3ee", label: "Docker" },
    { Icon: SiJavascript, color: "#facc15", label: "JS" },
    { Icon: SiHtml5, color: "#fb923c", label: "HTML5" },
    { Icon: SiKubernetes, color: "#60a5fa", label: "K8s" },
    
    { Icon: SiReact, color: "#61dafb", label: "React" },
    { Icon: FaAws, color: "#fb923c", label: "AWS" },
    { Icon: SiOracle, color: "#F80000", label: "Oracle Cloud" },
    { Icon: SiGooglecloud, color: "#4285F4", label: "Google Cloud" }
];

export default function FloatingTechIcons() {
    const containerRef = useRef(null);
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const generatedElements = tags.map((tag, index) => {
            // Distribute points on a sphere using Fibonacci lattice
            const phi = Math.acos(-1 + (2 * index) / tags.length);
            const theta = Math.sqrt(tags.length * Math.PI) * phi;

            return {
                ...tag,
                x: 0,
                y: 0,
                z: 0,
                phi,
                theta,
                scale: 1,
                opacity: 1
            };
        });
        setElements(generatedElements);
    }, []);

    useEffect(() => {
        let animationFrameId;
        const radius = 180; // Size of the sphere
        let rotationX = 0;
        let rotationY = 0;

        const animate = () => {
            rotationX += 0.003;
            rotationY += 0.003;

            setElements(prevElements => prevElements.map(el => {
                // Rotate coordinates
                const cosX = Math.cos(rotationX);
                const sinX = Math.sin(rotationX);
                const cosY = Math.cos(rotationY);
                const sinY = Math.sin(rotationY);

                // Initial position on sphere
                const initialX = radius * Math.sin(el.phi) * Math.cos(el.theta);
                const initialY = radius * Math.sin(el.phi) * Math.sin(el.theta);
                const initialZ = radius * Math.cos(el.phi);

                // Apply rotations
                let y = initialY * cosX - initialZ * sinX;
                let z = initialY * sinX + initialZ * cosX;
                let x = initialX * cosY - z * sinY;
                z = initialX * sinY + z * cosY;

                // Calculate scale and opacity based on depth (z)
                const scale = (z + 2 * radius) / (3 * radius); // Simple perspective
                const opacity = Math.max(0.1, (z + radius) / (2 * radius));

                return { ...el, x, y, z, scale, opacity };
            }));

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] flex items-center justify-center overflow-hidden perspective-container"
            style={{ perspective: '1000px' }}
        >
            {elements.map((el, i) => {
                const IconComponent = el.Icon;
                return (
                    <div
                        key={i}
                        className="absolute flex items-center justify-center p-4 rounded-full border backdrop-blur-md shadow-lg transition-all duration-300"
                        style={{
                            transform: `translate3d(${el.x}px, ${el.y}px, 0) scale(${el.scale})`,
                            opacity: el.opacity,
                            zIndex: Math.floor(el.scale * 100),
                            color: el.color,
                            borderColor: el.color,
                            backgroundColor: 'rgba(15, 23, 42, 0.6)',
                            boxShadow: `0 0 20px ${el.color}40`,
                            left: '50%',
                            top: '50%',
                            marginLeft: '-40px',
                            marginTop: '-40px',
                            width: '80px',
                            height: '80px',
                            willChange: 'transform, opacity'
                        }}
                        title={el.label}
                    >
                        <IconComponent size={40} />
                    </div>
                );
            })}
        </div>
    );
}
