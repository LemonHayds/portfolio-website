import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export default function Lemon (props) {

    const ref = useRef();
    useFrame(() => (ref.current.rotation.y -= 0.006))
    const { nodes, materials } = useGLTF('/lemon.glb')
    return (
      <group {...props} dispose={null} scale={1.3}>
        <mesh ref={ref}>
          <mesh geometry={nodes.Circle001.geometry} material={materials['lemon flesh.001']} position={[0.08, 0.6, -0.09]} rotation={[-0.26, -0.46, 0.26]}>
            <mesh geometry={nodes.BezierCurve002.geometry} material={materials.leaf} position={[0.03, 1.05, -0.02]} rotation={[0.08, 0.97, 2.96]} scale={-1.17}>
              <mesh geometry={nodes.Plane002.geometry} material={materials.leaf} />
            </mesh>
            <mesh geometry={nodes.Circle002.geometry} material={materials['lemon flesh']} position={[0, 0.04, 0]} scale={0.95} />
            <mesh geometry={nodes.Circle003.geometry} material={materials['lemon white']} position={[0, 0.02, 0]} rotation={[Math.PI, 0, 0]} scale={0.92} />
          </mesh>
          <mesh geometry={nodes.Circle004.geometry} material={materials['lemon flesh.001']} position={[0.23, 0.05, -0.09]} rotation={[-0.04, -0.08, 0.01]}>
            <mesh geometry={nodes.Circle005.geometry} material={materials['lemon flesh']} position={[0, -0.07, 0]} scale={0.95} />
            <mesh geometry={nodes.Circle006.geometry} material={materials['lemon white']} position={[0, -0.08, 0]} rotation={[Math.PI, 0, 0]} scale={0.92} />
          </mesh>
          <mesh geometry={nodes.Circle015.geometry} material={materials['lemon flesh.001']} position={[0.2, -0.32, -0.18]} rotation={[0, -0.44, 2.98]}>
            <mesh geometry={nodes.Circle016.geometry} material={materials['lemon flesh']} position={[0, 0.04, 0]} scale={0.95} />
            <mesh geometry={nodes.Circle017_2.geometry} material={materials['lemon white']} position={[0, 0.02, 0]} rotation={[Math.PI, 0, 0]} scale={0.92} />
          </mesh>
          <mesh geometry={nodes.Sphere.geometry} material={materials['lemon flesh.001']} position={[1.32, 0.97, 0.24]} />
          <mesh geometry={nodes.Sphere002.geometry} material={materials['lemon flesh.001']} position={[1.45, 0.36, -0.11]} />
          <mesh geometry={nodes.Sphere006.geometry} material={materials['lemon flesh.001']} position={[1.27, -0.41, 0.07]} />
          <mesh geometry={nodes.Sphere001.geometry} material={materials['lemon flesh.001']} position={[-1.01, -0.04, 0.41]} />
          <mesh geometry={nodes.Sphere004.geometry} material={materials['lemon flesh.001']} position={[-0.94, 0.23, 0.17]} />
        </mesh>
      </group>
    )
  }