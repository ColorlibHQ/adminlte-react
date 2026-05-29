import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const files = ['dist/index.js', 'dist/index.cjs']

files.forEach(file => {
  try {
    const filePath = path.join(__dirname, file)
    const content = fs.readFileSync(filePath, 'utf8')

    if (!content.startsWith('"use client"')) {
      fs.writeFileSync(filePath, '"use client";\n' + content)
      console.log(`✓ Added "use client" directive to ${file}`)
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message)
  }
})
