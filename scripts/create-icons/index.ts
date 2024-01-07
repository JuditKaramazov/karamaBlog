//
// Generates Astro components from SVG files.
// Adapted from: https://github.com/astro-community/icons
//
import fs from 'node:fs/promises'
import ps from 'node:path/posix'
import ora from 'ora'
import chalk from 'chalk'
import { toInnerSvg } from './svg.ts'
import { toAstroComponent } from './toAstroComponent.ts'
import { toReactComponent } from './toReactComponent.ts'

const currentDir = ps.resolve('.')

const srcDirs = [
  ps.resolve(currentDir, 'node_modules/feather-icons/dist/icons'),
  ps.resolve(currentDir, 'src/images')
]

const distDir = ps.resolve(currentDir, 'src/images/components')

const icons = []

export async function generateIcons(distDir: string) {
  const spinner = ora(
    `${chalk.bold('[create-icons]')} Create icon components`
  ).start()

  await fs.rm(distDir, { force: true, recursive: true })
  await fs.mkdir(distDir, { recursive: true })
  await fs.mkdir(`${distDir}/react`, { recursive: true })

  await fs.copyFile(
    ps.resolve(currentDir, 'scripts/create-icons/Props.d.ts'),
    ps.resolve(distDir, 'Props.d.ts')
  )
  await fs.copyFile(
    ps.resolve(currentDir, 'scripts/create-icons/Props.d.ts'),
    ps.resolve(`${distDir}/react`, 'Props.d.ts')
  )

  let contentOfIndexJS = '// @ts-nocheck\n'
  let contentOfIndexReactJS = '// @ts-nocheck\n'

  for (const src of srcDirs) {
    for (let filepath of await fs.readdir(src, { encoding: 'utf8' })) {
      if (!filepath.endsWith('.svg')) continue

      const name = filepath.replace(/\.svg$/, '')

      filepath = ps.resolve(src, filepath)

      const innerSVG = toInnerSvg(await fs.readFile(filepath, 'utf8'))

      const title = name
        .replace(/(?<=^|-)([a-z])/g, (_0, $1) => $1.toUpperCase())
        .replace(/[^A-Za-z0-9]+/g, ' ')
        .replace('Github Logo', 'GitHub Logo')

      const baseName = title.replace(/ /g, '')

      await fs.writeFile(
        ps.resolve(distDir, `${baseName}.astro`),
        toAstroComponent(innerSVG, title),
        'utf8'
      )

      await fs.writeFile(
        ps.resolve(`${distDir}/react`, `${baseName}.tsx`),
        toReactComponent(innerSVG, title),
        'utf8'
      )

      contentOfIndexJS += `\nexport { default as ${baseName} } from './${baseName}.astro'`

      contentOfIndexReactJS += `\nexport { Icon as ${baseName} }  from './${baseName}.tsx'`

      icons.push({ name, baseName, title })
    }
  }

  await fs.writeFile(ps.resolve(distDir, 'index.ts'), contentOfIndexJS, 'utf8')

  await fs.writeFile(
    ps.resolve(`${distDir}/react`, 'index.ts'),
    contentOfIndexReactJS,
    'utf8'
  )

  spinner.succeed(
    `${chalk.bold('[create-icons]')} Generated ${
      icons.length
    } icons into @images/components.`
  )
}

generateIcons(distDir)
