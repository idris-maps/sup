rm -rf dist
mkdir dist

# deno

echo "bundle for deno..."
esbuild scripts/deno.mjs --bundle --minify --outfile=dist/sup.deno.js
echo '#!/usr/bin/env -S deno run --allow-read --allow-write' | cat - dist/sup.deno.js > temp && mv temp dist/sup.deno.js
chmod u+x dist/sup.deno.js

# node

echo "bundle for node..."
esbuild scripts/node.mjs --bundle --minify --outfile=dist/sup.node.js --platform=node
echo '#!/usr/bin/env node' | cat - dist/sup.node.js > temp && mv temp dist/sup.node.js
chmod u+x dist/sup.node.js

# quick

echo "compile quick..."
qjsc scripts/quick.mjs -o dist/sup
chmod u+x dist/sup

echo "done"
