export function LogAddition(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log("Új teendő hozzáadása...");
    return originalMethod.apply(this, args);
  };
}
