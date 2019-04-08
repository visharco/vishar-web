git pull
npm ci
rm -rf build
npm run build
scp -r build/* root@vishar.com:/home/projects/vishar-web
