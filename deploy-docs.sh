set -e  # Exit immediately on error

echo "Building project..."
yarn build

echo "Wipe old docs folder..."
rm -rf docs

echo "Copying dist to docs..."
cp -r dist docs

if [ -f CNAME ]; then
  echo "Copying CNAME into docs..."
  cp CNAME docs/CNAME
else
  echo "⚠️  No CNAME file found in root. Skipping..."
fi

echo "Done, commit and push to main branch to deploy to site"