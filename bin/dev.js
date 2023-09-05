#!/usr/bin/env node --loader ts-node/esm
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({development: true, dir: import.meta.url})
})()
