import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { BoxGeometry, MeshStandardMaterial } from 'three'



const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;
`

export const Test = () => {
    return (
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <MeshStandardMaterial>
                        <RenderTexture attach={"map"}>
                            <PerspectiveCamera
                            makeDefault
                            position={[]}/>
                            <color attach="background" args={["pink"]} />
                            <Text fontSize={3} color="#555">Hello</Text>
                        </RenderTexture>
                    </MeshStandardMaterial>
                </mesh>
            </Canvas>
        </Container>)
}
