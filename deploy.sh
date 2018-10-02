# abort on errors
set -e

# build
npm run build

# navigate into the deploy directory
cd docs/.vuepress/dist

echo 'style-guide.vivifyideas.com' > CNAME

git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Vivify-Ideas/style-guide.git gh-pages

cd -