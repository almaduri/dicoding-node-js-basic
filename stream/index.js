/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs")
const path = require("path")

const readableStream = fs.createReadStream(path.resolve(__dirname, "input.txt"), {
  highWaterMark: 15, encoding: "utf-8"
})

const writableStream = fs.createWriteStream(path.resolve(__dirname, "output.txt"))

readableStream.on("readable", () => {
  try {
    // process.stdout.write(`${readableStream.read()}\n`)
    writableStream.write(`${readableStream.read()}\n`)
  } catch (error) {
    console.log(error)
  }
})

readableStream.on("end", () => {
  writableStream.end()
})