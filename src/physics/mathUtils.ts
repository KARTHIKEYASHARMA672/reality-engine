import { Vector3D } from '../types/physics';

export const vec3 = {
  create: (x = 0, y = 0, z = 0): Vector3D => ({ x, y, z }),
  clone: (v: Vector3D): Vector3D => ({ x: v.x, y: v.y, z: v.z }),
  add: (a: Vector3D, b: Vector3D): Vector3D => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }),
  sub: (a: Vector3D, b: Vector3D): Vector3D => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z }),
  scale: (v: Vector3D, s: number): Vector3D => ({ x: v.x * s, y: v.y * s, z: v.z * s }),
  dot: (a: Vector3D, b: Vector3D): number => a.x * b.x + a.y * b.y + a.z * b.z,
  cross: (a: Vector3D, b: Vector3D): Vector3D => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x }),
  lengthSq: (v: Vector3D): number => v.x * v.x + v.y * v.y + v.z * v.z,
  length: (v: Vector3D): number => Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z),
  distance: (a: Vector3D, b: Vector3D): number => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2)),
  normalize: (v: Vector3D): Vector3D => {
    const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    return len === 0 ? { x: 0, y: 0, z: 0 } : { x: v.x / len, y: v.y / len, z: v.z / len };
  }
};
