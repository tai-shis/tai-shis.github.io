set -e  # Exit immediately on error

echo "Building project..."
yarn build

echo "Wipe old docs folder..."
rm -rf docs

echo "Copying dist to docs..."
cp -r dist docs

echo "Done, commit and push to main branch to deploy to site"