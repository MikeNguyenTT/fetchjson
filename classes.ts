import { hasUncaughtExceptionCaptureCallback } from 'process';

class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
