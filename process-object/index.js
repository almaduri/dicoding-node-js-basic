// const server = new Server({
//   host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com"
// })

// const cpuInformation = process.memoryUsage();

// console.log(cpuInformation);

// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);

const initialMemoryUsage = process.memoryUsage().heapUsed
const yourName = process.argv[2]
const environment = process.env.NODE_ENV
// const environment = process.argv[3]

for(let i = 0; i <= 10000; i++) {

}

const currentMemoryUsage = process.memoryUsage().heapUsed

console.log(`Hai, ${yourName}`)
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`)