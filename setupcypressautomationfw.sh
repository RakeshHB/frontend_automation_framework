#install node which installs npm. To verify run 'node -v && npm -v'
#brew install node@20
mkdir automation_framework
cd automation_framework
npm init -y
mkdir /tmp/cypress_cache
export CYPRESS_CACHE_FOLDER="/tmp/cypress_cache"
npm install cypress --save-dev