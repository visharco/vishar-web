npm ci
rm -rf build
npm run build
scp -r build/* root@185.8.175.189:/home/projects/vishar-web