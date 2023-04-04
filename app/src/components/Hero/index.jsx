import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from 'styled-components';
import { Orange, Red } from '../../utils/colors';
function Hero() {
    return (
        <Section>
            <Left>
                <Title>Welcome to ALLO CHEF!</Title>
                <WhatWeDo>
                    <Line />
                    <Subtitle>What we Do</Subtitle>
                </WhatWeDo>
                <Description>We are your go-to destination for delicious and convenient food delivery. Our mission is to bring you the best dining experience possible, right to your doorstep.</Description>
                <Button>Learn More</Button>
            </Left>
            <Right>
                <Canvas >
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 200]} scale={1.7} >
                        <MeshDistortMaterial color={Orange} attach="material" distort={0.5} speed={2} />
                    </Sphere>
                </Canvas>
                <Img src="./assets/hero/pngwing.com.png" alt="Hero" srcset="" />
            </Right>
        </Section>
    )
}

export default Hero


const Section = styled.div`
height: 100vh;
max-width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex:2;
display: flex;
flex-direction:column;
justify-content: center;
gap: 20px;
`;

const Right = styled.div`
flex:2;
position: relative;
`;

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;`;

const Title = styled.h1`
font-size: 58px;
font-weight: bolder;
`;

const Line = styled.img`
height: 5px;
`;

const Subtitle = styled.h2`
color: ${Orange};
`;

const Description = styled.p`
font-size: 24px;
color: lightwhite`;

const Button = styled.button`
background: ${Orange};
color: white;
width: 200px;
font-weight: bold;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;`;

const Img = styled.img`
width: 500px;
height: 300px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(20px);
    }
}`;