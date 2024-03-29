//
// Finds all zip files in all article folders,
// and then copies them to public/get/.
//
import fs from 'node:fs'
import path from 'node:path'
import globby from 'globby'
import ora, { type Ora } from 'ora'
import chalk from 'chalk'

const sourceFolder = './content/articles/'
const destinationFolder = './public/get/'
const filesGlob = '**/*.zip'

const spinner = ora(
  `${chalk.bold('[move-downloads]')} Finding and moving zip files`
).start()

function removeFolderContents(folderPath: string) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const filePath = path.join(folderPath, file)
      if (fs.lstatSync(filePath).isDirectory()) {
        removeFolderContents(filePath)
        fs.rmSync(filePath)
      } else {
        fs.unlinkSync(filePath)
      }
    })
  }
}

export async function copyZipFiles(
  source: string,
  destination: string,
  spinner: Ora
) {
  removeFolderContents(destination)

  // Creates the destination folder (if it doesn't exist).
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true })
  }

  const zipFiles = await globby(filesGlob, { cwd: source })

  zipFiles.forEach((zipFile: string) => {
    const sourcePath = path.join(source, zipFile)
    const destinationPath = path.join(destination, path.basename(zipFile))

    try {
      fs.copyFileSync(sourcePath, destinationPath)
    } catch (error: any) {
      spinner.fail(
        `${chalk.bold('[move-downloads]')} Error copying ${zipFile}: ${
          (error as Error).message
        }`
      )
      return
    }
  })

  spinner.succeed(
    `${chalk.bold('[move-downloads]')} Copied ${
      zipFiles.length
    } .zip files to ${destination}`
  )
}

await copyZipFiles(sourceFolder, destinationFolder, spinner)
